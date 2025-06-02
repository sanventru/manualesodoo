# MANUAL TÉCNICO: SISTEMA ODOO 16 COMMUNITY ADAPTADO A LA LEGISLACIÓN ECUATORIANA

**Versión 1.0**  
**Mayo 2025**

## ÍNDICE DE CONTENIDOS

1. **INTRODUCCIÓN**
   1.1. Arquitectura del Sistema  
   1.2. Estructura de la Localización Ecuatoriana
   1.3. Integración con SRI

2. **CONFIGURACIÓN TÉCNICA**  
   2.1. Instalación de Módulos Ecuatorianos  
   2.2. Configuración de Parámetros del Sistema  
   2.3. Estructura de Permisos  
   2.4. Configuración Avanzada de Documentos Electrónicos  
   2.5. Gestión de Certificados Digitales

3. **MÓDULO DE CONTABILIDAD (ec_account_base)**  
   3.1. Plan de Cuentas Ecuatoriano  
   3.2. Configuración de Impuestos  
   3.3. Estructura de Diarios Contables  
   3.4. Procesos Contables Locales  
   3.5. Reportes Financieros Adaptados

4. **DOCUMENTOS ELECTRÓNICOS (ec_account_edi)**  
   4.1. Arquitectura del Módulo  
   4.2. Proceso de Firmado Electrónico  
   4.3. Comunicación con Servicios Web del SRI  
   4.4. Gestión de Respuestas del SRI  
   4.5. Estructura de XML y Validaciones

---

## 1. INTRODUCCIÓN

### 1.1. Arquitectura del Sistema

El sistema Odoo 16 Community adaptado a la legislación ecuatoriana ha sido diseñado con una arquitectura modular que permite cumplir con todos los requerimientos fiscales y contables establecidos por el Servicio de Rentas Internas (SRI) de Ecuador.

La implementación está basada en el framework Odoo 16, con los siguientes componentes principales:

- **Core Odoo**: Funcionalidad base del sistema (Contabilidad, Inventario, Ventas, Compras, etc.)
- **Localización Ecuatoriana**: Conjunto de módulos específicos desarrollados por HackSystem bajo la carpeta `core/ec_location/`
- **Módulos Integrados**: Adaptaciones que conectan la funcionalidad estándar con los requerimientos locales

La arquitectura sigue el patrón MVC (Modelo-Vista-Controlador) propio de Odoo, donde:
- **Modelo**: Definido en los archivos Python dentro de la carpeta `models` de cada módulo
- **Vista**: Implementada en archivos XML en la carpeta `views` de cada módulo
- **Controlador**: Lógica de negocio implementada en Python, principalmente en wizards y modelos

### 1.2. Estructura de la Localización Ecuatoriana

La localización ecuatoriana está estructurada en múltiples módulos específicos, cada uno responsable de una parte de la funcionalidad necesaria para cumplir con la normativa local. Los principales módulos son:

1. **ec_account_base**: Módulo base de contabilidad ecuatoriana que incluye:
   - Plan de cuentas ecuatoriano
   - Estructura de impuestos
   - Configuraciones básicas de localización

2. **ec_account_edi**: Implementación de facturación electrónica:
   - Generación de XML según formato SRI
   - Firmado electrónico de documentos
   - Comunicación con webservices del SRI
   - Gestión de respuestas y autorizaciones

3. **ec_ats**: Módulo para la generación del Anexo Transaccional Simplificado:
   - Recopilación de información de transacciones
   - Validación de datos según normativa SRI
   - Generación de archivo XML para declaración

4. **ec_withholding**: Gestión de retenciones:
   - Configuración de porcentajes de retención
   - Emisión de comprobantes de retención
   - Validación según normativa vigente

5. **ec_sri_authorizathions**: Gestión de autorizaciones y numeración de documentos:
   - Control de secuencias de documentos
   - Validación de autorizaciones
   - Administración de puntos de emisión

6. **ec_financial_reports**: Reportes financieros adaptados a requerimientos locales:
   - Balances adaptados a formato Ecuador
   - Reportes tributarios
   - Análisis financieros específicos

### 1.3. Integración con SRI

La integración con el Servicio de Rentas Internas (SRI) se realiza a través de varios componentes:

1. **Servicios Web**: El sistema se comunica con los webservices del SRI mediante:
   - Protocolo SOAP para el envío de documentos electrónicos
   - Validación de respuestas y gestión de errores
   - Consulta de estado de documentos

2. **Firmado Electrónico**: Implementado mediante:
   - Módulo `xadesSigner.py` para la firma de documentos
   - Soporte para certificados en formato P12
   - Validación de vigencia de certificados

3. **Validación de Datos**: El sistema incluye:
   - Validación de RUC/CI según algoritmo verificador
   - Validación de estructura de documentos
   - Cumplimiento de formatos según normativa

4. **Gestión de Respuestas**: Manejo de diferentes estados:
   - Recibido
   - En procesamiento
   - Autorizado
   - Rechazado
   - Con errores

---

## 2. CONFIGURACIÓN TÉCNICA

### 2.1. Instalación de Módulos Ecuatorianos

La localización ecuatoriana requiere la instalación de varios módulos interdependientes. El orden recomendado de instalación es:

1. **Módulos base**:
   ```
   ec_account_base
   ec_sri_authorizathions
   ```

2. **Módulos de facturación**:
   ```
   ec_account_edi
   ec_withholding
   ```

3. **Módulos complementarios**:
   ```
   ec_ats
   ec_financial_reports
   ```

Cada módulo cuenta con sus propias dependencias que se activan automáticamente durante la instalación. El sistema verifica la coherencia de dependencias para asegurar un funcionamiento correcto.

### 2.2. Configuración de Parámetros del Sistema

Los parámetros críticos del sistema se configuran a través de:

1. **Parámetros de compañía**:
   - RUC y datos fiscales
   - Régimen tributario
   - Configuración de firmado electrónico

2. **Parámetros técnicos**:
   - URLs de servicios web SRI (producción/pruebas)
   - Timeouts de conexión
   - Directorios de almacenamiento de XML

3. **Parámetros operativos**:
   - Secuencias de documentos
   - Numeración de puntos de emisión
   - Prefijos y sufijos

El sistema utiliza la clase `res_company` extendida en `ec_account_edi/models/res_company.py` para almacenar estos parámetros a nivel de compañía, permitiendo una operación multicompañía.

### 2.3. Estructura de Permisos

El sistema implementa un modelo de seguridad basado en grupos:

1. **Grupos específicos**:
   - `account_edi_user`: Usuarios de facturación electrónica
   - `account_edi_manager`: Administradores de facturación electrónica
   - `sri_user`: Usuarios con acceso a funciones SRI
   - `sri_manager`: Administradores de configuración SRI

2. **Permisos por objeto**:
   - Definidos en archivos `security/ir.model.access.csv` de cada módulo
   - Controlan operaciones CRUD por grupo

3. **Reglas de registro**:
   - Implementadas en `security/rules.xml`
   - Filtran acceso por compañía, establecimiento o usuario

Este modelo de seguridad garantiza que los usuarios solo puedan acceder a las funcionalidades y datos acordes a su rol dentro de la organización.

### 2.4. Configuración Avanzada de Documentos Electrónicos

La configuración de documentos electrónicos se realiza a través de:

1. **Tipos de documentos**:
   - Facturas (01)
   - Notas de crédito (04)
   - Notas de débito (05)
   - Retenciones (07)
   - Guías de remisión (06)
   - Liquidaciones de compra (03)

2. **Ambientes de operación**:
   - Pruebas (1)
   - Producción (2)

3. **Contingencia**:
   - Gestión de claves de contingencia
   - Proceso de emisión en modo offline

4. **Plantillas XML**:
   - Almacenadas en `ec_account_edi/data/templates/`
   - Validadas contra esquemas XSD oficiales
   - Parametrizables según versión de formato

La implementación utiliza una arquitectura extensible que permite añadir nuevos tipos de documentos o adaptar los existentes ante cambios en la normativa SRI.

### 2.5. Gestión de Certificados Digitales

El sistema permite la gestión de certificados digitales para firma electrónica:

1. **Tipos de certificados soportados**:
   - Archivo P12 (PKCS#12)
   - Soporte para certificados de entidades autorizadas (BCE, Security Data, etc.)

2. **Proceso de carga**:
   - Carga del archivo P12
   - Validación de formato
   - Verificación de fecha de expiración

3. **Seguridad**:
   - Almacenamiento seguro de contraseña
   - Validación periódica de vigencia
   - Alertas de vencimiento

4. **Configuración técnica**:
   ```python
   # Proceso de firma implementado en ec_account_edi/models/xadesSigner.py
   def sign_xml(self, xml_document, cert_path, cert_password):
       # Implementación de firma XAdES-BES
   ```

La gestión de certificados está implementada en el módulo `ec_account_edi` a través de las clases `sri.keys` y `xadesSigner`, que manejan todo el ciclo de vida del certificado digital.

---

## 3. MÓDULO DE CONTABILIDAD (ec_account_base)

### 3.1. Plan de Cuentas Ecuatoriano

El plan de cuentas ecuatoriano está implementado como una plantilla estándar, con las siguientes características:

1. **Estructura**:
   - Basado en NIIF
   - Adaptado a requerimientos SRI
   - Códigos compatibles con formularios 101, 102 y 104

2. **Implementación técnica**:
   - Definido en `ec_account_base/data/account.account.template.csv`
   - Cargado durante la instalación del módulo
   - Grupos de cuentas definidos en `account_group_template_data.xml`

3. **Personalización**:
   - Extensible mediante categorías adicionales
   - Posibilidad de añadir subcuentas específicas
   - Estructura jerárquica para reportes

4. **Integración**:
   - Mapeo con códigos de formularios SRI
   - Asociación automática con impuestos
   - Configuración de conciliación automática

La estructura del plan de cuentas sigue la normativa contable ecuatoriana y facilita la generación de reportes financieros y tributarios requeridos por las autoridades fiscales.

### 3.2. Configuración de Impuestos

El sistema implementa una completa configuración de impuestos adaptada a la legislación ecuatoriana:

1. **Tipos de impuestos**:
   - IVA (diferentes porcentajes: 0%, 12%, 15%, etc.)
   - ICE (específico por producto)
   - Retenciones de IVA (30%, 70%, 100%)
   - Retenciones de Renta (diferentes porcentajes según el concepto)

2. **Implementación técnica**:
   - Definidos en `ec_account_base/data/account_tax_template_data.xml`
   - Extensión del modelo `account.tax` para incluir códigos SRI
   - Configuración de códigos de impuestos según catálogo SRI

3. **Funcionalidad avanzada**:
   ```python
   # Implementado en ec_account_edi/models/account_tax.py
   def get_tax_values(self, base, amount):
       # Cálculo y validación de impuestos
   ```

4. **Adaptación dinámica**:
   - Actualización de porcentajes sin modificar código
   - Activación/desactivación según normativa vigente
   - Histórico de cambios para declaraciones de períodos anteriores

La implementación garantiza el correcto cálculo de impuestos en documentos y su adecuada representación en los anexos y declaraciones requeridos por el SRI.

### 3.3. Estructura de Diarios Contables

Los diarios contables están adaptados para cumplir con los requerimientos de la contabilidad ecuatoriana:

1. **Diarios estándar**:
   - Ventas (facturas, notas de crédito, notas de débito)
   - Compras (facturas, liquidaciones, importaciones)
   - Retenciones emitidas
   - Retenciones recibidas
   - Bancos y efectivo

2. **Configuración técnica**:
   - Extensión del modelo `account.journal`
   - Asociación con tipos de documentos SRI
   - Configuración de secuencias específicas

3. **Automatización**:
   - Selección automática de diario según tipo de documento
   - Validación de secuencias
   - Control de numeración por punto de emisión

4. **Contabilización específica**:
   - Esquemas contables adaptados a normativa local
   - Manejo separado de impuestos para declaraciones
   - Tratamiento especial de retenciones

La estructura de diarios facilita la organización contable y contribuye a mantener la integridad y trazabilidad de las transacciones.

### 3.4. Procesos Contables Locales

El sistema implementa diversos procesos contables específicos para Ecuador:

1. **Retenciones**:
   - Cálculo automático según tipo de contribuyente
   - Emisión de comprobantes de retención
   - Validación de plazos legales

2. **Liquidaciones de compra**:
   - Emisión para proveedores sin RUC o no obligados a llevar contabilidad
   - Cálculo automático de retenciones obligatorias
   - Validación de límites según normativa

3. **Notas de crédito/débito**:
   - Vinculación con documentos originales
   - Validación de plazos legales
   - Motivos predefinidos según normativa

4. **Procesos de cierre**:
   - Cierre mensual para declaraciones
   - Validación de consistencia contable
   - Generación de asientos de ajuste

Cada proceso está implementado como una extensión de los flujos estándar de Odoo, manteniendo la compatibilidad con el core y añadiendo las validaciones específicas requeridas por la legislación ecuatoriana.

### 3.5. Reportes Financieros Adaptados

Los reportes financieros han sido adaptados a los formatos requeridos por las autoridades ecuatorianas:

1. **Reportes oficiales**:
   - Balance de Situación adaptado
   - Estado de Resultados con clasificación local
   - Estado de Flujo de Efectivo
   - Estado de Cambios en el Patrimonio

2. **Implementación técnica**:
   - Desarrollados utilizando el motor QWeb
   - Personalización de plantillas en XML
   - Lógica de cálculo en Python

3. **Exportación**:
   - Formatos PDF, Excel y HTML
   - Estructura compatible con presentación a organismos oficiales
   - Opciones de filtrado y parametrización

4. **Funcionalidades avanzadas**:
   - Comparativos interanuales
   - Análisis de variaciones
   - Indicadores financieros locales

Los reportes financieros constituyen una herramienta fundamental para la gestión empresarial y el cumplimiento de obligaciones con entidades reguladoras.

---

## 4. DOCUMENTOS ELECTRÓNICOS (ec_account_edi)

### 4.1. Arquitectura del Módulo

El módulo de facturación electrónica (`ec_account_edi`) está diseñado con una arquitectura robusta y extensible:

1. **Componentes principales**:
   - Generador de XML (`xml_data.py`)
   - Firmador electrónico (`xadesSigner.py`)
   - Comunicador con SRI (`sri.py`)
   - Gestor de respuestas y autorizaciones

2. **Modelo de datos**:
   - `sri.xml.data`: Almacena información de documentos electrónicos
   - `sri.keys`: Gestiona certificados digitales
   - `sri.error.code`: Catálogo de errores SRI

3. **Integración con Odoo**:
   - Extensión de `account.move` para documentos electrónicos
   - Adaptación de flujos de trabajo estándar
   - Hooks en puntos clave del proceso

4. **Arquitectura técnica**:
   ```
   /models
     /account_move.py     # Extensión de facturas
     /xml_data.py         # Generación de XML
     /xadesSigner.py      # Firmado electrónico
     /sri.py              # Comunicación con webservices
   /data
     /templates/          # Plantillas XML
     /xsd/                # Esquemas de validación
   ```

Esta arquitectura modular permite mantener y extender la funcionalidad ante cambios en la normativa o requisitos técnicos.

### 4.2. Proceso de Firmado Electrónico

El proceso de firmado electrónico sigue el estándar XAdES-BES requerido por el SRI:

1. **Preparación del documento**:
   - Generación del XML según formato SRI
   - Inclusión de información obligatoria
   - Validación previa contra esquemas XSD

2. **Firmado electrónico**:
   ```python
   # Implementado en xadesSigner.py
   def sign_xml(self, xml_content, p12_certificate, password):
       # Carga del certificado P12
       # Extracción de clave privada
       # Firma del documento
       # Inclusión de información del certificado
       return signed_xml
   ```

3. **Validaciones técnicas**:
   - Verificación de vigencia del certificado
   - Validación de estructura de firma
   - Comprobación de integridad del documento

4. **Manejo de errores**:
   - Detección de problemas de certificado
   - Errores en el proceso de firma
   - Validación posterior a la firma

El sistema utiliza bibliotecas estándar de criptografía y firma digital, adaptadas a los requerimientos específicos del SRI Ecuador.

### 4.3. Comunicación con Servicios Web del SRI

La comunicación con los webservices del SRI se implementa a través de clientes SOAP:

1. **Servicios utilizados**:
   - Recepción de comprobantes
   - Autorización de comprobantes
   - Consulta de estado

2. **Implementación técnica**:
   ```python
   # Implementado en sri.py
   def send_xml_to_sri(self, xml_content, environment):
       # Configuración del cliente SOAP
       # Envío del documento
       # Procesamiento de respuesta
       return response
   ```

3. **Gestión de conexión**:
   - Manejo de timeouts
   - Reintentos automáticos
   - Logs detallados de comunicación

4. **Validación de respuestas**:
   - Decodificación de mensajes de error
   - Interpretación de códigos de estado
   - Almacenamiento de respuestas para auditoría

La implementación maneja adecuadamente los diferentes ambientes (pruebas/producción) y contempla los casos de contingencia cuando los servicios no están disponibles.

### 4.4. Gestión de Respuestas del SRI

El sistema implementa un completo flujo de gestión de respuestas del SRI:

1. **Estados del documento**:
   - `draft`: Borrador
   - `signed`: Firmado
   - `waiting`: Enviado, esperando autorización
   - `authorized`: Autorizado
   - `rejected`: Rechazado
   - `returned`: Devuelto (con errores)
   - `cancel`: Cancelado

2. **Procesamiento de respuestas**:
   ```python
   # Implementado en account_move.py
   def process_sri_response(self, response):
       # Análisis de la respuesta
       # Actualización del estado
       # Registro de errores si existen
       # Notificaciones a usuarios
   ```

3. **Gestión de errores**:
   - Catálogo de errores SRI precargado
   - Sugerencias de corrección
   - Flujos de reenvío o corrección

4. **Notificaciones**:
   - Alertas al usuario
   - Correos automáticos
   - Registro en log del sistema

Este sistema de gestión de respuestas permite un seguimiento completo del ciclo de vida del documento electrónico y facilita la resolución de problemas cuando ocurren.

### 4.5. Estructura de XML y Validaciones

Los documentos XML generados cumplen estrictamente con los esquemas definidos por el SRI:

1. **Estructura por tipo de documento**:
   - Facturas: `factura_v1.0.xsd`
   - Notas de crédito: `notaCredito_v1.0.xsd`
   - Retenciones: `comprobanteRetencion_v1.0.xsd`
   - Etc.

2. **Generación de XML**:
   ```python
   # Implementado en xml_data.py
   def generate_invoice_xml(self, invoice):
       # Creación de estructura XML
       # Inclusión de datos obligatorios
       # Cálculo de totales y verificación
       return xml_string
   ```

3. **Validaciones implementadas**:
   - Estructura según XSD
   - Consistencia matemática (totales, impuestos)
   - Datos obligatorios según tipo de documento
   - Formato de campos específicos (fechas, números)

4. **Herramientas de diagnóstico**:
   - Validadores internos
   - Comparación con ejemplos oficiales
   - Depuración detallada de estructura

El sistema garantiza que los documentos generados cumplan con todas las especificaciones técnicas del SRI, minimizando rechazos por errores de formato.
