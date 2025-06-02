# EXTENSIÓN: PROCESOS SRI

## 10. PROCESOS SRI

### 10.1. Menú SRI

El módulo SRI centraliza todas las funcionalidades relacionadas con el cumplimiento tributario ecuatoriano, proporcionando un punto de acceso unificado para la gestión de documentos electrónicos, retenciones y anexos fiscales.

![Menu SRI](odoo%2016%20módulos/80_menu%20sri.png)

**Características principales:**

- **Panel de control SRI**: Muestra indicadores clave como documentos pendientes de autorización, rechazados y autorizados.
- **Acceso centralizado**: Agrupa todas las funciones tributarias específicas para Ecuador.
- **Monitoreo en tiempo real**: Seguimiento del estado de comunicaciones con los servicios web del SRI.
- **Alertas automáticas**: Notificaciones sobre documentos con problemas o pendientes de acción.

**Submenús disponibles:**
- **Documentos Electrónicos**: Gestión de comprobantes emitidos y recibidos
- **Retenciones**: Administración de comprobantes de retención
- **ATS**: Generación y validación del Anexo Transaccional Simplificado
- **Autorizaciones**: Control de secuencias y autorizaciones
- **Reportes Tributarios**: Informes específicos para declaraciones

### 10.2. Carga de Documentos Electrónicos

Esta funcionalidad permite importar documentos electrónicos XML recibidos de proveedores para su registro automático en el sistema.

![Carga de documentos electrónicos](odoo%2016%20módulos/81_carga%20de%20documentos%20electronicos.png)

**Proceso detallado:**

1. **Selección de archivos**: El usuario puede cargar uno o múltiples archivos XML.
2. **Validación preliminar**: El sistema verifica la estructura y firma digital del documento.
3. **Extracción de datos**: Se obtiene automáticamente la información fiscal y comercial.
4. **Creación de registros**: Generación automática de facturas, retenciones o notas de crédito.
5. **Conciliación**: Vinculación con proveedores existentes en el sistema.
6. **Validación fiscal**: Verificación de la autorización con el servicio web del SRI.

**Funcionalidades avanzadas:**
- **Procesamiento por lotes**: Carga masiva de documentos XML
- **Validación de duplicados**: Prevención de registro múltiple del mismo documento
- **Registro de errores**: Documentación detallada de problemas encontrados
- **Corrección asistida**: Sugerencias para resolver inconsistencias

### 10.3. XML Enviados al SRI

Esta sección permite el seguimiento completo de los documentos electrónicos enviados al SRI, facilitando el monitoreo de su estado de autorización.

![XML enviados al SRI](odoo%2016%20módulos/82_xml%20enviados%20al%20sri.png)

**Información disponible:**
- **Clave de acceso**: Identificador único de 49 dígitos
- **Tipo de documento**: Factura, retención, nota de crédito, etc.
- **Fecha de emisión**: Fecha de generación del documento
- **Estado**: Firmado, enviado, autorizado, rechazado
- **Fecha de autorización**: Timestamp de la respuesta del SRI
- **Número de autorización**: Código asignado por el SRI

![XML enviados al SRI detalle](odoo%2016%20módulos/83_xml%20enviados%20al%20sri%20detalle.png)

**Funcionalidades de gestión:**
- **Filtrado avanzado**: Por tipo, estado, fecha o cliente/proveedor
- **Reenvío automático**: Para documentos no autorizados
- **Descarga de archivos**: XML firmado y autorizado
- **Visualización RIDE**: Representación impresa del documento
- **Historial de comunicaciones**: Registro de interacciones con el SRI
- **Notificaciones configurables**: Alertas sobre cambios de estado

### 10.4. Retenciones de Compra

El módulo de retenciones de compra permite la emisión y gestión de comprobantes de retención a proveedores, cumpliendo con los requisitos del SRI.

![Retenciones de compra](odoo%2016%20módulos/84_retenciones%20de%20compra.png)

**Características principales:**
- **Emisión desde factura**: Generación automática desde facturas de proveedor
- **Cálculo automático**: Determinación de porcentajes según normativa vigente
- **Validación de plazos**: Control del límite de 5 días para emisión
- **Numeración secuencial**: Control por establecimiento y punto de emisión
- **Emisión electrónica**: Generación de XML según formato SRI
- **Impresión RIDE**: Formato oficial para representación impresa

![Retenciones de compra detalle](odoo%2016%20módulos/85_retenciones%20de%20compra%20detalle.png)

**Formulario de retención:**
- **Cabecera**: Proveedor, fecha, número de autorización
- **Documento relacionado**: Factura a la que aplica la retención
- **Impuestos retenidos**: Desglose por tipo (renta, IVA) y porcentaje
- **Bases imponibles**: Valores sobre los que se aplica cada retención
- **Información de documento electrónico**: Estado de autorización SRI

![Detalle de retenciones de compra](odoo%2016%20módulos/86_detalle%20de%20retenciones%20de%20compra.png)

**Vista detallada:**
- **Información fiscal completa**: Datos de emisor y receptor
- **Desglose por código**: Clasificación según catálogo SRI
- **Valores calculados**: Base imponible y valor retenido
- **Contabilización**: Asiento contable generado
- **Historial**: Seguimiento de modificaciones y autorizaciones

![Detalle detalle retenciones de compra](odoo%2016%20módulos/87_detalle%20detalle%20retenciondes%20de%20compra.png)

**Configuraciones avanzadas:**
- **Retención automática**: Según tipo de contribuyente y bien/servicio
- **Plantillas por proveedor**: Configuración predeterminada por proveedor
- **Validación fiscal**: Verificación de porcentajes según normativa vigente
- **Envío automático**: Notificación al proveedor tras autorización
- **Reportes específicos**: Informes para declaraciones mensuales

### 10.5. Retenciones de Venta

Este módulo gestiona las retenciones recibidas de clientes, permitiendo su registro, validación y aplicación a facturas emitidas.

![Retenciones de ventas](odoo%2016%20módulos/88_retenciones%20den%20ventas.png)

**Características principales:**
- **Registro manual**: Ingreso de retenciones físicas recibidas
- **Carga desde XML**: Importación de retenciones electrónicas
- **Validación fiscal**: Verificación de porcentajes y bases
- **Aplicación a facturas**: Vinculación con documentos de venta
- **Impacto en cartera**: Actualización automática de saldos por cobrar
- **Inclusión en ATS**: Integración con anexo transaccional

![Detalle retención en venta](odoo%2016%20módulos/89_detalle%20retencion%20en%20venta.png)

**Formulario de retención recibida:**
- **Información del cliente**: Datos fiscales del emisor de la retención
- **Documento relacionado**: Factura a la que aplica
- **Número de retención**: Secuencia asignada por el cliente
- **Autorización SRI**: Número de autorización del documento
- **Impuestos retenidos**: Desglose por tipo y porcentaje
- **Fecha de emisión**: Control de plazos legales

![Detalle de retención en ventas](odoo%2016%20módulos/90_detalle%20de%20retencion%20en%20ventas.png)

**Vista detallada:**
- **Información completa**: Todos los campos fiscales requeridos
- **Valores calculados**: Bases imponibles y montos retenidos
- **Estado de aplicación**: Vinculación con factura de venta
- **Contabilización**: Asiento contable generado
- **Validaciones**: Verificación de consistencia con factura relacionada

![Detalle detalle retención en ventas](odoo%2016%20módulos/91_detalle%20detalle%20retencion%20en%20ventas.png)

**Funcionalidades avanzadas:**
- **Validación cruzada**: Verificación contra factura emitida
- **Control de fechas**: Validación de plazos legales
- **Alertas de inconsistencia**: Notificación de discrepancias en valores
- **Reportes específicos**: Informes para declaraciones mensuales
- **Conciliación automática**: Aplicación a saldos pendientes

### 10.6. Anexo Transaccional Simplificado (ATS)

El módulo ATS permite la generación del anexo transaccional requerido mensualmente por el SRI, consolidando la información de compras, ventas y retenciones.

![ATS](odoo%2016%20módulos/92_ats.png)

**Proceso de generación:**
1. **Selección de período**: Mes y año a reportar
2. **Recopilación de datos**: Extracción de transacciones del período
3. **Validación preliminar**: Verificación de consistencia y completitud
4. **Corrección de inconsistencias**: Identificación y solución de problemas
5. **Generación de XML**: Creación del archivo según formato SRI
6. **Validación final**: Verificación contra esquema oficial
7. **Exportación**: Descarga del archivo para carga en DIMM

**Características principales:**
- **Validación exhaustiva**: Verificación de RUC, autorizaciones, valores
- **Corrección asistida**: Identificación clara de inconsistencias
- **Generación automática**: Cálculo de totales y agrupaciones
- **Inclusión de anulados**: Registro de documentos anulados en el período
- **Validación matemática**: Verificación de cuadre de impuestos
- **Formato oficial**: Cumplimiento estricto de esquema XSD del SRI

**Secciones del ATS:**
- **Identificación informante**: Datos de la empresa emisora
- **Compras**: Adquisiciones del período con desglose de impuestos
- **Ventas**: Ventas del período agrupadas por cliente
- **Exportaciones**: Ventas al exterior (si aplica)
- **Anulados**: Documentos emitidos y anulados en el período
- **Retenciones**: Información de retenciones emitidas y recibidas

**Consideraciones especiales:**
- **Precisión decimal**: Control especial para evitar problemas de redondeo
- **Validación de identificaciones**: Verificación de algoritmo de RUC/cédula
- **Control de duplicados**: Prevención de registro múltiple de documentos
- **Documentos especiales**: Tratamiento específico para liquidaciones, reembolsos
- **Límites de tamaño**: Gestión de archivos grandes para contribuyentes con alto volumen
