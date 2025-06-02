# MANUAL TÉCNICO: SISTEMA ODOO 16 COMMUNITY ADAPTADO A LA LEGISLACIÓN ECUATORIANA

## ÍNDICE DE CONTENIDOS (CONTINUACIÓN)

5. **ANEXO TRANSACCIONAL SIMPLIFICADO (ec_ats)**  
   5.1. Arquitectura y Componentes  
   5.2. Proceso de Recopilación de Datos  
   5.3. Validaciones y Cálculos  
   5.4. Generación del XML  
   5.5. Consideraciones de Precisión en Cálculos

6. **RETENCIONES (ec_withholding)**  
   6.1. Modelo de Datos  
   6.2. Configuración de Porcentajes  
   6.3. Proceso de Emisión Electrónica  
   6.4. Validaciones Especiales

7. **REPORTES FINANCIEROS (ec_financial_reports)**  
   7.1. Estructura Técnica  
   7.2. Implementación de Reportes  
   7.3. Fórmulas y Cálculos  
   7.4. Exportación de Datos

8. **AUTORIZACIONES SRI (ec_sri_authorizathions)**  
   8.1. Gestión de Puntos de Emisión  
   8.2. Control de Secuencias  
   8.3. Validación de Autorizaciones  
   8.4. Integración con Documentos

---

## 5. ANEXO TRANSACCIONAL SIMPLIFICADO (ec_ats)

### 5.1. Arquitectura y Componentes

El módulo de Anexo Transaccional Simplificado (ATS) está diseñado para generar el reporte obligatorio mensual que debe presentarse al SRI. Su arquitectura se compone de:

1. **Estructura de directorios**:
   ```
   /ec_ats
     /wizard/           # Asistentes para generación de ATS
       /ats.py          # Clase principal para generación
       /ats_view.xml    # Interfaz de usuario
     /models/           # Modelos de datos
     /data/             # Datos precargados (códigos, catálogos)
     /views/            # Vistas adicionales
     /report/           # Reportes complementarios
   ```

2. **Clases principales**:
   - `SriAts`: Clase principal para generación del anexo (wizard)
   - `SriAtsLine`: Modelo para registro de errores y validaciones

3. **Dependencias**:
   - `ec_account_base`: Para estructura contable
   - `ec_account_edi`: Para documentos electrónicos
   - `ec_withholding`: Para información de retenciones

4. **Puntos de extensión**:
   - Hooks para personalización de recopilación de datos
   - Opciones de configuración para casos especiales
   - Posibilidad de exportación personalizada

La implementación sigue el patrón de diseño asistente (wizard) para facilitar la generación y validación del anexo.

### 5.2. Proceso de Recopilación de Datos

El módulo implementa un proceso exhaustivo de recopilación de datos para el ATS:

1. **Fuentes de información**:
   - Facturas de venta (`account.move` tipo `out_invoice`)
   - Facturas de compra (`account.move` tipo `in_invoice`)
   - Notas de crédito (`account.move` tipos `out_refund` y `in_refund`)
   - Notas de débito (`account.move` con flag `debit_note` activado)
   - Retenciones emitidas y recibidas

2. **Proceso de recopilación**:
   ```python
   # Implementado en ats.py
   def _get_invoice_values(self, invoice_ids):
       # Extracción y cálculo de valores fiscales
       result = {
           'base_iva': 0.0,
           'base_iva_0': 0.0,
           'total_ice': 0.0,
           'amount_untaxed': 0.0,
           'base_no_iva': 0.0
       }
       for invoice_id in invoice_ids:
           # Procesamiento por factura
           # Clasificación de bases imponibles
           # Acumulación de totales
   ```

3. **Agrupación por contribuyente**:
   ```python
   def _get_invoice_values_per_partner(self, invoice_ids):
       # Generación de consulta SQL para agrupar por contribuyente
       # Clasificación por tipo de documento
       # Totales acumulados por contribuyente
   ```

4. **Información adicional**:
   - Formas de pago
   - Tipos de comprobante
   - Información de establecimiento y punto de emisión
   - Documentos anulados

Este proceso garantiza la recolección precisa de todos los datos requeridos por el SRI para el anexo transaccional.

### 5.3. Validaciones y Cálculos

El módulo implementa un conjunto completo de validaciones para garantizar la integridad de la información:

1. **Validaciones de estructura**:
   - Completitud de datos obligatorios
   - Formato de identificaciones (RUC, cédula)
   - Estructura de números de documento
   - Consistencia de fechas

2. **Validaciones fiscales**:
   ```python
   def check_ced(self, ced_ruc, foreign=False, l10n_latam_identification_type_id=False):
       # Validación de RUC/Cédula según algoritmo
       # Validación de identificaciones extranjeras
       # Verificación de tipo de identificación vs. formato
   ```

3. **Cálculos fiscales**:
   - Agrupación por tipo de impuesto
   - Cálculo de bases imponibles
   - Validación de retenciones aplicadas
   - Verificación de totales y cuadre

4. **Validaciones específicas**:
   ```python
   def check_invoice_supplier_data(self, wizard, invoice):
       # Validación específica para facturas de proveedor
       # Verificación de autorizaciones
       # Validación de fechas de emisión y registro
   ```

El sistema registra todas las inconsistencias detectadas, permitiendo su corrección antes del envío definitivo al SRI.

### 5.4. Generación del XML

El proceso de generación del XML del ATS sigue un flujo estructurado:

1. **Estructura principal**:
   ```python
   def generate_xml(self):
       # Creación de estructura base
       node_root = Element('iva')
       # Información del contribuyente
       # Período fiscal
       # Secciones principales:
       # - compras
       # - ventas
       # - anulados
       return tostring(node_root)
   ```

2. **Sección de compras**:
   ```python
   def generate_info_invoice_supplier(self, node_root, node_name, inv, ...):
       # Generación de nodo para cada proveedor
       # Inclusión de información fiscal
       # Desglose de impuestos
       # Información de retenciones
   ```

3. **Sección de ventas**:
   ```python
   def generate_info_invoice_sale(self, node_root, node_name, ...):
       # Generación de nodo para cada cliente
       # Agrupación por tipo de documento
       # Totales por cliente y tipo
       # Información de formas de pago
   ```

4. **Sección de anulados**:
   ```python
   def generate_info_document_cancel(self, node_root, node_name, ...):
       # Lista de documentos anulados
       # Clasificación por tipo
       # Inclusión de datos requeridos
   ```

El XML generado cumple con las especificaciones establecidas por el SRI para el Anexo Transaccional Simplificado.

### 5.5. Consideraciones de Precisión en Cálculos

Un aspecto crítico en la generación del ATS es la precisión en los cálculos de valores monetarios:

1. **Problema de precisión decimal**:
   - Los cálculos de IVA pueden presentar problemas de redondeo
   - Diferencias en el tercer decimal pueden acumularse en transacciones masivas
   - El SRI requiere cuadre exacto entre bases imponibles e impuestos

2. **Solución implementada**:
   ```python
   # Implementado en ats.py
   def _get_invoice_values(self, invoice_ids):
       # Uso de float_round para controlar precisión
       # Aplicación de redondeo según normativa SRI
       # Validación de totales después de redondeo
   ```

3. **Validación cruzada**:
   - Comparación entre suma individual y agrupada
   - Ajustes automáticos de diferencias mínimas
   - Logs detallados de valores pre y post redondeo

4. **Herramientas de diagnóstico**:
   - Script auxiliar `sum_iva_ats.py` para validación
   - Verificación de `montoIva` para documentos tipo `tipoComprobante='18'`
   - Comparación con cálculos manuales

Estas consideraciones garantizan la exactitud en los reportes presentados al SRI, evitando inconsistencias que podrían generar notificaciones o sanciones.

---

## 6. RETENCIONES (ec_withholding)

### 6.1. Modelo de Datos

El módulo de retenciones implementa una estructura de datos completa para la gestión de retenciones según la normativa ecuatoriana:

1. **Modelos principales**:
   - `account.retention`: Documento de retención
   - `account.retention.line`: Líneas de retención (impuestos)
   - `account.retention.tax`: Configuración de impuestos retenibles

2. **Relaciones clave**:
   ```python
   class AccountRetention(models.Model):
       _name = 'account.retention'
       
       # Relaciones principales
       invoice_id = fields.Many2one('account.move', 'Factura')
       partner_id = fields.Many2one('res.partner', 'Contribuyente')
       tax_line_ids = fields.One2many('account.retention.line', 'retention_id', 'Impuestos')
       move_id = fields.Many2one('account.move', 'Asiento contable')
   ```

3. **Extensiones de modelos estándar**:
   - Extensión de `account.move` para vincular retenciones
   - Extensión de `account.tax` para información específica de retención
   - Extensión de `res.partner` para configuración de retención por contribuyente

4. **Campos técnicos**:
   - Estado de documento electrónico
   - Numeración y secuencias
   - Autorizaciones SRI
   - Fechas de emisión y autorización

Este modelo de datos proporciona la base para toda la funcionalidad de gestión de retenciones en el sistema.

### 6.2. Configuración de Porcentajes

El sistema implementa un mecanismo flexible para la configuración de porcentajes de retención:

1. **Estructura de impuestos**:
   ```python
   # Configuración en account.tax
   retention_percentage = fields.Float('Porcentaje de Retención')
   retention_code = fields.Char('Código SRI')
   retention_type = fields.Selection([
       ('rent', 'Renta'),
       ('vat', 'IVA')
   ], 'Tipo de Retención')
   ```

2. **Reglas de aplicación**:
   - Por tipo de contribuyente (especial, RISE, obligado a llevar contabilidad)
   - Por tipo de bien o servicio
   - Por monto de transacción
   - Por tipo de comprobante

3. **Actualización dinámica**:
   - Porcentajes configurables sin modificar código
   - Histórico de cambios para períodos fiscales
   - Validación de combinaciones válidas

4. **Automatización**:
   ```python
   def _compute_applicable_retentions(self, invoice):
       # Determinación de retenciones aplicables
       # Cálculo de porcentajes según normativa
       # Validación de montos mínimos
   ```

Esta configuración flexible permite mantener el sistema actualizado ante cambios en la normativa tributaria sin necesidad de modificaciones en el código.

### 6.3. Proceso de Emisión Electrónica

El proceso de emisión electrónica de retenciones sigue un flujo similar al de otros documentos electrónicos:

1. **Generación del documento**:
   ```python
   def action_generate_retention(self, invoice):
       # Creación del documento de retención
       # Cálculo de impuestos retenidos
       # Asignación de secuencia y numeración
   ```

2. **Generación del XML**:
   - Estructura según esquema XSD del SRI
   - Inclusión de información obligatoria
   - Vinculación con factura relacionada

3. **Firmado y autorización**:
   - Firma electrónica con certificado digital
   - Envío al SRI para autorización
   - Procesamiento de respuesta

4. **Notificación**:
   - Envío al contribuyente
   - Almacenamiento de evidencias
   - Registro de estado de entrega

El sistema garantiza el cumplimiento de los plazos legales para la emisión y entrega de comprobantes de retención.

### 6.4. Validaciones Especiales

El módulo implementa validaciones específicas para el proceso de retención:

1. **Validaciones temporales**:
   - Control de plazos máximos para emisión (5 días en Ecuador)
   - Verificación de fecha de emisión vs. fecha de factura
   - Alertas por vencimiento de plazos

2. **Validaciones fiscales**:
   ```python
   def _validate_retention_taxes(self, retention):
       # Verificación de porcentajes según normativa vigente
       # Validación de base imponible
       # Control de máximos y mínimos
   ```

3. **Validaciones de consistencia**:
   - Correspondencia entre factura y retención
   - Cuadre de bases imponibles
   - Coherencia entre tipo de contribuyente y retenciones aplicadas

4. **Controles especiales**:
   - Retenciones presuntivas
   - Casos de contribuyentes especiales
   - Situaciones de convenio de doble tributación

Estas validaciones garantizan el cumplimiento de la normativa tributaria y minimizan el riesgo de observaciones por parte de la autoridad fiscal.

---

## 7. REPORTES FINANCIEROS (ec_financial_reports)

### 7.1. Estructura Técnica

El módulo de reportes financieros implementa una arquitectura flexible para la generación de informes adaptados a la normativa ecuatoriana:

1. **Estructura de directorios**:
   ```
   /ec_financial_reports
     /wizard/                       # Asistentes para generación de reportes
       /wizard_reportes_financieros.py  # Clase principal
       /wizard_reportes_financieros.xml # Interfaz de usuario
     /report/                       # Plantillas de reportes
     /models/                       # Modelos de datos
     /security/                     # Control de acceso
   ```

2. **Arquitectura MVC**:
   - **Modelo**: Clases Python para lógica de negocio y cálculos
   - **Vista**: Plantillas QWeb y XML para presentación
   - **Controlador**: Wizards para parametrización y generación

3. **Tecnologías utilizadas**:
   - Motor de reportes QWeb
   - Estilos CSS personalizados
   - Integración con módulos de exportación

4. **Puntos de extensión**:
   - Hooks para fórmulas personalizadas
   - Plantillas heredables
   - Parámetros configurables

Esta estructura técnica proporciona la base para implementar diversos reportes financieros con una experiencia de usuario consistente.

### 7.2. Implementación de Reportes

El módulo implementa diversos reportes financieros requeridos por la normativa ecuatoriana:

1. **Reportes principales**:
   - Balance de Situación
   - Estado de Resultados
   - Balance de Comprobación
   - Estado de Flujo de Efectivo
   - Anexos fiscales específicos

2. **Implementación técnica**:
   ```python
   class WizardReportesFinancieros(models.TransientModel):
       _name = 'wizard.reportes.financieros'
       
       # Parámetros comunes
       date_from = fields.Date('Fecha Inicial')
       date_to = fields.Date('Fecha Final')
       company_id = fields.Many2one('res.company', 'Compañía')
       report_type = fields.Selection([
           ('balance', 'Balance General'),
           ('results', 'Estado de Resultados'),
           # Otros tipos...
       ], 'Tipo de Reporte')
       
       def generate_report(self):
           # Selección de método según tipo
           # Recopilación de datos
           # Aplicación de fórmulas
           # Generación de salida
   ```

3. **Personalización por compañía**:
   - Adaptación a plan de cuentas específico
   - Niveles de detalle configurables
   - Formatos personalizados de presentación

4. **Integración con sistema contable**:
   - Acceso directo desde menús contables
   - Validación previa de datos
   - Trazabilidad a documentos fuente

La implementación garantiza la generación de reportes precisos y conformes con los requerimientos de los organismos reguladores.

### 7.3. Fórmulas y Cálculos

El sistema implementa un mecanismo avanzado para los cálculos en reportes financieros:

1. **Motor de fórmulas**:
   ```python
   def _compute_formula(self, formula, data_dict):
       # Evaluación segura de fórmulas
       # Acceso a cuentas por código
       # Operaciones aritméticas
       # Funciones financieras especiales
   ```

2. **Tipos de cálculos**:
   - Saldos de cuenta (deudor/acreedor)
   - Agrupaciones por categoría
   - Ratios financieros
   - Variaciones y comparativos

3. **Personalización**:
   - Fórmulas definidas en XML o base de datos
   - Reutilización de componentes
   - Herencia y extensión de cálculos

4. **Validaciones**:
   - Verificación de consistencia
   - Detección de referencias circulares
   - Comprobación de resultados

Este motor de fórmulas proporciona la flexibilidad necesaria para adaptarse a diferentes formatos de reportes y requisitos específicos.

### 7.4. Exportación de Datos

El módulo ofrece diversas opciones para exportar los reportes generados:

1. **Formatos soportados**:
   - PDF (presentación formal)
   - Excel (análisis detallado)
   - CSV (integración con otros sistemas)
   - HTML (visualización web)

2. **Implementación técnica**:
   ```python
   def _export_report(self, data, format_type):
       # Selección de método de exportación
       # Aplicación de formato específico
       # Generación de archivo
       # Entrega al usuario
   ```

3. **Características avanzadas**:
   - Plantillas predefinidas
   - Formatos oficiales
   - Marcas de agua y sellos
   - Firmas digitales

4. **Integración**:
   - Envío por correo electrónico
   - Almacenamiento en sistema de documentos
   - Histórico de reportes generados

Estas opciones de exportación facilitan el uso de los reportes financieros para diferentes propósitos, desde presentaciones oficiales hasta análisis internos.

---

## 8. AUTORIZACIONES SRI (ec_sri_authorizathions)

### 8.1. Gestión de Puntos de Emisión

El módulo implementa un sistema completo para la gestión de puntos de emisión según la normativa del SRI:

1. **Estructura de datos**:
   ```python
   class SriPrinterPoint(models.Model):
       _name = 'sri.printer.point'
       
       shop_id = fields.Many2one('sale.shop', 'Establecimiento')
       printer_number = fields.Char('Número de Punto de Emisión', size=3)
       document_electronic_ids = fields.One2many('sri.printer.point.document.electronic', 'printer_id', 'Documentos Electrónicos')
       document_physical_ids = fields.One2many('sri.printer.point.document.physical', 'printer_id', 'Documentos Físicos')
   ```

2. **Niveles de organización**:
   - Compañía
   - Establecimiento (sucursal)
   - Punto de emisión (caja/impresora)
   - Tipos de documento por punto

3. **Configuración técnica**:
   - Numeración secuencial por documento
   - Prefijos según normativa (001-001-000000001)
   - Validación de formato

4. **Automatización**:
   - Selección automática según usuario
   - Asignación de secuencias
   - Control de acceso por punto

Esta estructura permite cumplir con los requisitos del SRI para la emisión de documentos desde diferentes ubicaciones físicas de la empresa.

### 8.2. Control de Secuencias

El sistema implementa un robusto control de secuencias para documentos fiscales:

1. **Gestión de secuencias**:
   ```python
   class SriSequence(models.Model):
       _name = 'sri.sequence'
       
       printer_id = fields.Many2one('sri.printer.point', 'Punto de Emisión')
       document_type = fields.Selection([...], 'Tipo de Documento')
       sequence_id = fields.Many2one('ir.sequence', 'Secuencia')
       current_number = fields.Integer('Número Actual')
   ```

2. **Validaciones**:
   - Secuencialidad estricta
   - Prevención de duplicados
   - Control de saltos de secuencia
   - Bloqueo de números utilizados

3. **Funcionalidades avanzadas**:
   - Reserva de números
   - Gestión de anulados
   - Reinicio programado (anual, mensual)
   - Auditoría de uso

4. **Integración**:
   - Uso en documentos electrónicos y físicos
   - Validación en proceso de autorización
   - Reportes de secuencias utilizadas

El control de secuencias garantiza el cumplimiento de la normativa fiscal y facilita la auditoría de documentos emitidos.

### 8.3. Validación de Autorizaciones

El módulo implementa un sistema para la gestión y validación de autorizaciones del SRI:

1. **Tipos de autorización**:
   - Autorizaciones propias (documentos emitidos)
   - Autorizaciones de terceros (documentos recibidos)
   - Autorizaciones electrónicas (claves de acceso)

2. **Estructura de datos**:
   ```python
   class SriAuthorization(models.Model):
       _name = 'sri.authorization'
       
       partner_id = fields.Many2one('res.partner', 'Contribuyente')
       authorization_number = fields.Char('Número de Autorización', size=49)
       start_date = fields.Date('Fecha de Inicio')
       expiration_date = fields.Date('Fecha de Vencimiento')
       document_type = fields.Selection([...], 'Tipo de Documento')
   ```

3. **Validaciones implementadas**:
   - Formato de número de autorización
   - Vigencia de autorización
   - Correspondencia con tipo de documento
   - Validez para el contribuyente

4. **Automatización**:
   - Verificación en tiempo real
   - Alertas de vencimiento
   - Validación en registro de documentos
   - Verificación en línea (opcional)

Este sistema garantiza que todos los documentos fiscales utilizados cumplan con los requisitos de autorización establecidos por el SRI.

### 8.4. Integración con Documentos

El módulo de autorizaciones se integra con el resto del sistema para proporcionar una solución completa:

1. **Puntos de integración**:
   - Facturas de venta y compra
   - Notas de crédito y débito
   - Retenciones
   - Guías de remisión

2. **Funcionalidades integradas**:
   ```python
   def get_authorization_for_document(self, partner_id, document_type, date, printer_id=None):
       # Búsqueda de autorización válida
       # Validación de parámetros
       # Asignación de secuencia
       # Registro de uso
   ```

3. **Validaciones cruzadas**:
   - Coherencia entre autorización y documento
   - Validación de secuencia dentro de rango
   - Verificación de datos fiscales

4. **Auditoría**:
   - Registro de autorizaciones utilizadas
   - Trazabilidad de documentos
   - Reportes de cumplimiento

Esta integración asegura que todos los documentos fiscales emitidos o recibidos cumplan con los requisitos de autorización establecidos por el SRI, minimizando riesgos tributarios.
