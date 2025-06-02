# MANUAL TÉCNICO: FACTURACIÓN ELECTRÓNICA ECUADOR - PARTE 1

## 1. INTRODUCCIÓN AL MÓDULO DE FACTURACIÓN ELECTRÓNICA

### 1.1. Arquitectura General

El módulo de facturación electrónica para Ecuador en Odoo 16 está diseñado para cumplir con todos los requisitos establecidos por el Servicio de Rentas Internas (SRI) para la emisión, firma, autorización y gestión de comprobantes electrónicos.

**Componentes principales:**

1. **Módulo base (ec_account_edi)**:
   - Implementa la estructura fundamental para documentos electrónicos
   - Gestiona el ciclo de vida de los comprobantes
   - Proporciona las interfaces para integración con el SRI

2. **Módulo de firma electrónica (ec_electronic_signature)**:
   - Gestiona certificados digitales
   - Implementa algoritmos de firma según estándares ecuatorianos
   - Valida y verifica firmas en documentos XML

3. **Módulo de comunicación SRI (ec_sri_webservice)**:
   - Implementa clientes SOAP para servicios web del SRI
   - Gestiona envío y recepción de documentos
   - Procesa respuestas y notificaciones

4. **Módulo de reportes (ec_account_edi_reports)**:
   - Genera representaciones impresas de documentos (RIDE)
   - Implementa formatos según normativa SRI
   - Proporciona opciones de distribución (email, impresión)

### 1.2. Dependencias y Estructura de Archivos

**Dependencias principales:**

```python
# Extracto de __manifest__.py
{
    'name': 'Ecuador Electronic Documents',
    'version': '16.0.1.0.0',
    'depends': [
        'account',
        'l10n_ec',
        'ec_account_base',
        'ec_electronic_signature',
        'mail',
    ],
    'data': [
        'security/ir.model.access.csv',
        'data/mail_template_data.xml',
        'data/ir_sequence_data.xml',
        'data/ir_cron_data.xml',
        'views/account_move_views.xml',
        'views/res_config_settings_views.xml',
        'views/res_company_views.xml',
        'views/account_journal_views.xml',
        'wizard/account_move_reversal_views.xml',
        'wizard/account_move_send_views.xml',
    ],
}
```

**Estructura de directorios:**

```
ec_account_edi/
├── __init__.py
├── __manifest__.py
├── controllers/
│   ├── __init__.py
│   └── portal.py
├── data/
│   ├── ir_cron_data.xml
│   ├── ir_sequence_data.xml
│   └── mail_template_data.xml
├── models/
│   ├── __init__.py
│   ├── account_journal.py
│   ├── account_move.py
│   ├── res_company.py
│   └── res_config_settings.py
├── security/
│   └── ir.model.access.csv
├── static/
│   └── src/
├── views/
│   ├── account_journal_views.xml
│   ├── account_move_views.xml
│   ├── res_company_views.xml
│   └── res_config_settings_views.xml
└── wizard/
    ├── __init__.py
    ├── account_move_reversal.py
    ├── account_move_reversal_views.xml
    ├── account_move_send.py
    └── account_move_send_views.xml
```

## 2. CONFIGURACIÓN DEL MÓDULO

### 2.1. Parámetros de Configuración

La configuración del módulo de facturación electrónica se realiza a nivel de compañía y a nivel de diario contable, con los siguientes parámetros principales:

**Configuración de Compañía:**

```python
# Extracto de res_company.py
class ResCompany(models.Model):
    _inherit = 'res.company'
    
    electronic_signature_id = fields.Many2one(
        'ec.electronic.signature',
        string='Electronic Signature',
        help='Electronic signature used for EDI documents'
    )
    edi_environment = fields.Selection([
        ('1', 'Test'),
        ('2', 'Production')
    ], string='Environment', default='1',
       help='Environment where electronic documents will be sent')
    edi_emission_type = fields.Selection([
        ('1', 'Normal'),
        ('2', 'Indisponibilidad SRI')
    ], string='Emission Type', default='1')
    edi_contingency_key = fields.Char(
        string='Contingency Key',
        help='Key provided by SRI for contingency emission'
    )
    edi_sender_email = fields.Char(
        string='Sender Email',
        help='Email used to send electronic documents to customers'
    )
```

**Configuración de Diario:**

```python
# Extracto de account_journal.py
class AccountJournal(models.Model):
    _inherit = 'account.journal'
    
    edi_enabled = fields.Boolean(
        string='Enable Electronic Documents',
        help='Enable electronic document generation for this journal'
    )
    edi_document_type = fields.Selection([
        ('01', 'Factura'),
        ('04', 'Nota de Crédito'),
        ('05', 'Nota de Débito'),
        ('06', 'Guía de Remisión'),
        ('07', 'Comprobante de Retención')
    ], string='Electronic Document Type')
    edi_sequence_id = fields.Many2one(
        'ir.sequence',
        string='Electronic Document Sequence'
    )
    edi_establishment = fields.Char(
        string='Establishment Code',
        size=3,
        help='SRI establishment code (3 digits)'
    )
    edi_emission_point = fields.Char(
        string='Emission Point',
        size=3,
        help='SRI emission point code (3 digits)'
    )
```

### 2.2. Secuencias y Numeración

La numeración de documentos electrónicos sigue el formato requerido por el SRI:

```
ESTABLECIMIENTO-PUNTO_EMISION-SECUENCIAL
```

Donde:
- **ESTABLECIMIENTO**: Código de 3 dígitos que identifica el establecimiento emisor
- **PUNTO_EMISION**: Código de 3 dígitos que identifica el punto de emisión
- **SECUENCIAL**: Número secuencial de 9 dígitos

La implementación se realiza mediante secuencias de Odoo:

```xml
<!-- Extracto de ir_sequence_data.xml -->
<record id="sequence_electronic_invoice" model="ir.sequence">
    <field name="name">Electronic Invoice Sequence</field>
    <field name="code">account.move.electronic.invoice</field>
    <field name="prefix"></field>
    <field name="padding">9</field>
    <field name="company_id" eval="False"/>
</record>

<record id="sequence_electronic_credit_note" model="ir.sequence">
    <field name="name">Electronic Credit Note Sequence</field>
    <field name="code">account.move.electronic.credit.note</field>
    <field name="prefix"></field>
    <field name="padding">9</field>
    <field name="company_id" eval="False"/>
</record>
```

La generación del número completo se implementa en el modelo `account.move`:

```python
# Extracto de account_move.py
def _get_electronic_number(self):
    """Generate electronic document number with format: 001-001-000000001"""
    if not self.journal_id.edi_establishment or not self.journal_id.edi_emission_point:
        raise UserError(_('Establishment and emission point must be configured'))
    
    sequence = self.journal_id.edi_sequence_id
    if not sequence:
        raise UserError(_('Electronic document sequence not configured'))
    
    next_number = sequence.next_by_id()
    return '{}-{}-{}'.format(
        self.journal_id.edi_establishment.zfill(3),
        self.journal_id.edi_emission_point.zfill(3),
        next_number.zfill(9)
    )
```

## 3. GENERACIÓN DE DOCUMENTOS ELECTRÓNICOS

### 3.1. Flujo de Procesamiento

El flujo completo de procesamiento de documentos electrónicos sigue estos pasos:

1. **Generación del documento**: Creación de la factura, nota de crédito, etc.
2. **Validación del documento**: Verificación de datos obligatorios
3. **Generación de XML**: Creación del archivo XML según esquema SRI
4. **Firma electrónica**: Aplicación de firma digital al XML
5. **Envío al SRI**: Transmisión del documento al webservice
6. **Procesamiento de respuesta**: Análisis de la respuesta del SRI
7. **Autorización**: Verificación del estado de autorización
8. **Notificación al cliente**: Envío del documento autorizado

Este flujo se implementa mediante estados en el modelo `account.move`:

```python
# Extracto de account_move.py
class AccountMove(models.Model):
    _inherit = 'account.move'
    
    edi_state = fields.Selection([
        ('draft', 'Draft'),
        ('to_send', 'To Send'),
        ('sent', 'Sent'),
        ('authorized', 'Authorized'),
        ('rejected', 'Rejected'),
        ('canceled', 'Canceled')
    ], string='Electronic Document State', default='draft', copy=False)
    
    edi_xml_data = fields.Binary(string='XML Data', copy=False, attachment=True)
    edi_xml_filename = fields.Char(string='XML Filename', copy=False)
    edi_access_key = fields.Char(string='Access Key', size=49, copy=False)
    edi_authorization_date = fields.Datetime(string='Authorization Date', copy=False)
    edi_authorization_number = fields.Char(string='Authorization Number', copy=False)
    edi_error_message = fields.Text(string='Error Message', copy=False)
```

### 3.2. Generación de XML

La generación del XML sigue los esquemas definidos por el SRI para cada tipo de documento. Se implementa mediante la construcción de un árbol XML utilizando la biblioteca `lxml`:

```python
# Extracto de account_move.py
def _generate_electronic_invoice_xml(self):
    """Generate XML for electronic invoice according to SRI schema"""
    # Crear estructura base del XML
    root = etree.Element('factura', {
        'id': 'comprobante',
        'version': '1.0.0'
    })
    
    # Información tributaria
    info_tributaria = etree.SubElement(root, 'infoTributaria')
    etree.SubElement(info_tributaria, 'ambiente').text = self.company_id.edi_environment
    etree.SubElement(info_tributaria, 'tipoEmision').text = self.company_id.edi_emission_type
    etree.SubElement(info_tributaria, 'razonSocial').text = self.company_id.name
    etree.SubElement(info_tributaria, 'nombreComercial').text = self.company_id.name
    etree.SubElement(info_tributaria, 'ruc').text = self.company_id.vat
    # Generar clave de acceso
    access_key = self._generate_access_key()
    etree.SubElement(info_tributaria, 'claveAcceso').text = access_key
    etree.SubElement(info_tributaria, 'codDoc').text = '01'  # Código para factura
    etree.SubElement(info_tributaria, 'estab').text = self.journal_id.edi_establishment
    etree.SubElement(info_tributaria, 'ptoEmi').text = self.journal_id.edi_emission_point
    etree.SubElement(info_tributaria, 'secuencial').text = self.edi_number.split('-')[2]
    etree.SubElement(info_tributaria, 'dirMatriz').text = self.company_id.street or ''
    
    # Información de factura
    info_factura = etree.SubElement(root, 'infoFactura')
    etree.SubElement(info_factura, 'fechaEmision').text = self.invoice_date.strftime('%d/%m/%Y')
    # Dirección establecimiento
    address = self.journal_id.edi_address or self.company_id.street or ''
    etree.SubElement(info_factura, 'dirEstablecimiento').text = address
    
    # Información del cliente
    if self.partner_id.company_type == 'company':
        tipo_identificacion = '04'  # RUC
    else:
        tipo_identificacion = '05'  # Cédula
    etree.SubElement(info_factura, 'tipoIdentificacionComprador').text = tipo_identificacion
    etree.SubElement(info_factura, 'razonSocialComprador').text = self.partner_id.name
    etree.SubElement(info_factura, 'identificacionComprador').text = self.partner_id.vat or ''
    etree.SubElement(info_factura, 'totalSinImpuestos').text = '{:.2f}'.format(self.amount_untaxed)
    
    # Impuestos
    # ... (código para generar estructura de impuestos)
    
    # Detalles de factura
    detalles = etree.SubElement(root, 'detalles')
    for line in self.invoice_line_ids:
        detalle = etree.SubElement(detalles, 'detalle')
        etree.SubElement(detalle, 'codigoPrincipal').text = line.product_id.default_code or '001'
        etree.SubElement(detalle, 'descripcion').text = line.name
        etree.SubElement(detalle, 'cantidad').text = '{:.2f}'.format(line.quantity)
        etree.SubElement(detalle, 'precioUnitario').text = '{:.2f}'.format(line.price_unit)
        etree.SubElement(detalle, 'descuento').text = '{:.2f}'.format(line.discount)
        etree.SubElement(detalle, 'precioTotalSinImpuesto').text = '{:.2f}'.format(line.price_subtotal)
        
        # Impuestos de línea
        # ... (código para generar estructura de impuestos por línea)
    
    # Información adicional
    info_adicional = etree.SubElement(root, 'infoAdicional')
    if self.partner_id.email:
        etree.SubElement(info_adicional, 'campoAdicional', nombre='email').text = self.partner_id.email
    if self.partner_id.phone:
        etree.SubElement(info_adicional, 'campoAdicional', nombre='teléfono').text = self.partner_id.phone
    if self.partner_id.street:
        etree.SubElement(info_adicional, 'campoAdicional', nombre='dirección').text = self.partner_id.street
    
    # Convertir a string y guardar
    xml_string = etree.tostring(root, encoding='UTF-8', xml_declaration=True)
    self.edi_xml_data = base64.b64encode(xml_string)
    self.edi_xml_filename = 'factura_{}.xml'.format(self.edi_number.replace('-', ''))
    self.edi_access_key = access_key
    
    return xml_string
```

### 3.3. Clave de Acceso

La clave de acceso es un identificador único de 49 dígitos que se genera para cada documento electrónico según las especificaciones del SRI:

```python
# Extracto de account_move.py
def _generate_access_key(self):
    """Generate SRI access key (49 digits)"""
    emission_date = self.invoice_date or fields.Date.context_today(self)
    
    # Formato: ddmmaaaa
    date_str = emission_date.strftime('%d%m%Y')
    
    # Tipo de comprobante (01=factura, 04=nota crédito, etc)
    doc_type = {
        'out_invoice': '01',
        'out_refund': '04',
        'out_debit': '05',
        'liq_purchase': '03',
        'withhold': '07'
    }.get(self.move_type, '01')
    
    # Número de RUC
    vat = self.company_id.vat or ''
    
    # Tipo de ambiente (1=pruebas, 2=producción)
    environment = self.company_id.edi_environment or '1'
    
    # Código numérico (8 dígitos)
    numeric_code = ''.join(random.choice('0123456789') for _ in range(8))
    
    # Tipo de emisión (1=normal, 2=indisponibilidad SRI)
    emission_type = self.company_id.edi_emission_type or '1'
    
    # Número de serie (establecimiento-punto-secuencial)
    if not self.edi_number:
        raise UserError(_('Electronic document number not generated'))
    
    serial_parts = self.edi_number.split('-')
    if len(serial_parts) != 3:
        raise UserError(_('Invalid electronic document number format'))
    
    establishment = serial_parts[0]
    emission_point = serial_parts[1]
    sequential = serial_parts[2]
    
    # Construir clave de acceso sin dígito verificador
    access_key = ''.join([
        date_str,
        doc_type,
        vat,
        environment,
        establishment,
        emission_point,
        sequential,
        numeric_code,
        emission_type
    ])
    
    # Calcular dígito verificador (módulo 11)
    factor = 2
    total = 0
    for digit in reversed(access_key):
        total += int(digit) * factor
        factor = 2 if factor >= 7 else factor + 1
    
    check_digit = 11 - (total % 11)
    if check_digit == 11:
        check_digit = 0
    elif check_digit == 10:
        check_digit = 1
    
    # Añadir dígito verificador
    access_key += str(check_digit)
    
    return access_key
```

## 4. FIRMA ELECTRÓNICA

### 4.1. Gestión de Certificados

Los certificados digitales se gestionan a través del módulo `ec_electronic_signature`, que implementa:

```python
# Extracto de ec_electronic_signature/models/electronic_signature.py
class ElectronicSignature(models.Model):
    _name = 'ec.electronic.signature'
    _description = 'Electronic Signature'
    
    name = fields.Char(string='Name', required=True)
    signature_file = fields.Binary(string='Signature File (.p12)', required=True, attachment=True)
    signature_filename = fields.Char(string='Signature Filename')
    password = fields.Char(string='Password', required=True)
    subject = fields.Char(string='Subject', readonly=True)
    issuer = fields.Char(string='Issuer', readonly=True)
    valid_from = fields.Datetime(string='Valid From', readonly=True)
    valid_to = fields.Datetime(string='Valid To', readonly=True)
    active = fields.Boolean(string='Active', default=True)
    company_id = fields.Many2one('res.company', string='Company', default=lambda self: self.env.company)
    
    @api.model
    def create(self, vals):
        record = super(ElectronicSignature, self).create(vals)
        record._validate_signature()
        return record
    
    def write(self, vals):
        result = super(ElectronicSignature, self).write(vals)
        if 'signature_file' in vals or 'password' in vals:
            self._validate_signature()
        return result
    
    def _validate_signature(self):
        """Validate electronic signature and extract certificate information"""
        for record in self:
            if not record.signature_file or not record.password:
                continue
            
            try:
                # Decodificar archivo p12
                p12_data = base64.b64decode(record.signature_file)
                p12 = crypto.load_pkcs12(p12_data, record.password.encode())
                cert = p12.get_certificate()
                
                # Extraer información del certificado
                subject = cert.get_subject()
                record.subject = ', '.join(['{}={}'.format(k, v) for k, v in subject.get_components()])
                
                issuer = cert.get_issuer()
                record.issuer = ', '.join(['{}={}'.format(k, v) for k, v in issuer.get_components()])
                
                record.valid_from = datetime.strptime(cert.get_notBefore().decode(), '%Y%m%d%H%M%SZ')
                record.valid_to = datetime.strptime(cert.get_notAfter().decode(), '%Y%m%d%H%M%SZ')
                
                # Verificar validez
                now = datetime.now()
                if record.valid_to < now:
                    raise UserError(_('The certificate has expired on %s') % record.valid_to)
                
            except Exception as e:
                raise UserError(_('Error validating electronic signature: %s') % str(e))
```

### 4.2. Proceso de Firma XML

La firma del XML se realiza utilizando el estándar XAdES-BES, según los requerimientos del SRI:

```python
# Extracto de ec_electronic_signature/models/electronic_signature.py
def sign_xml(self, xml_string):
    """Sign XML document using XAdES-BES standard"""
    if not self.signature_file or not self.password:
        raise UserError(_('Signature file and password are required'))
    
    try:
        # Decodificar archivo p12
        p12_data = base64.b64decode(self.signature_file)
        p12 = crypto.load_pkcs12(p12_data, self.password.encode())
        cert = p12.get_certificate()
        private_key = p12.get_privatekey()
        
        # Parsear XML
        root = etree.fromstring(xml_string)
        
        # Crear nodo de firma
        signature_node = xmlsig.template.create(
            c14n_method=xmlsig.constants.TransformInclC14N,
            sign_method=xmlsig.constants.TransformRsaSha1,
            ns='ds'
        )
        
        # Añadir nodo de firma al documento
        root.append(signature_node)
        
        # Crear contexto de firma
        ctx = xmlsig.SignatureContext()
        ctx.x509 = cert
        ctx.private_key = private_key
        
        # Configurar referencias
        ref = xmlsig.template.add_reference(
            signature_node,
            xmlsig.constants.TransformSha1,
            uri='',
            name='SignedProperties'
        )
        xmlsig.template.add_transform(ref, xmlsig.constants.TransformEnveloped)
        
        # Añadir información del certificado
        key_info = xmlsig.template.ensure_key_info(signature_node)
        x509_data = xmlsig.template.add_x509_data(key_info)
        xmlsig.template.x509_data_add_certificate(x509_data)
        xmlsig.template.x509_data_add_subject_name(x509_data)
        xmlsig.template.x509_data_add_issuer_serial(x509_data)
        
        # Añadir propiedades firmadas (XAdES)
        qualifying_properties = xmlsig.template.create_qualifying_properties(
            signature_node,
            name='QualifyingProperties'
        )
        signed_properties = xmlsig.template.create_signed_properties(
            qualifying_properties,
            name='SignedProperties'
        )
        
        # Añadir propiedades firmadas
        signed_signature_properties = xmlsig.template.create_signed_signature_properties(
            signed_properties,
            name='SignedSignatureProperties'
        )
        
        # Añadir tiempo de firma
        signing_time = etree.SubElement(
            signed_signature_properties,
            etree.QName(xmlsig.constants.NS_XMLDSIG, 'SigningTime')
        )
        signing_time.text = datetime.now().strftime('%Y-%m-%dT%H:%M:%S%z')
        
        # Firmar el documento
        ctx.sign(signature_node)
        
        # Verificar la firma
        ctx.verify(signature_node)
        
        # Devolver XML firmado
        return etree.tostring(root, encoding='UTF-8', xml_declaration=True)
        
    except Exception as e:
        raise UserError(_('Error signing XML: %s') % str(e))
```
