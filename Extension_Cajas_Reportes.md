# EXTENSIÓN: CAJAS CHICAS Y REPORTES FINANCIEROS

## 11. CAJAS CHICAS

### 11.1. Configuración de Cajas Chicas

El módulo de Cajas Chicas permite la gestión eficiente de fondos de efectivo para gastos menores, adaptado a los requerimientos contables y fiscales ecuatorianos.

![Cajas chicas menu](odoo%2016%20módulos/93_cajas%20chicas%20menu.png)

**Características principales:**

- **Gestión de múltiples cajas**: Creación y administración de diferentes fondos según ubicación o departamento.
- **Asignación de responsables**: Definición clara de custodios para cada caja.
- **Establecimiento de límites**: Configuración de montos máximos por caja y por transacción.
- **Categorización de gastos**: Definición de conceptos permitidos para cada fondo.
- **Flujos de aprobación**: Configuración de niveles de autorización según monto.
- **Integración contable**: Contabilización automática por tipo de gasto.

**Panel principal:**
- **Lista de cajas activas**: Visualización de todas las cajas configuradas
- **Saldo actual**: Monto disponible en cada caja
- **Responsable**: Usuario asignado como custodio
- **Estado**: Activa, en reposición, cerrada
- **Límite máximo**: Tope configurado para el fondo
- **Gastos pendientes**: Transacciones no procesadas

![Caja chica detalle](odoo%2016%20módulos/94_caja%20chica%20detalle.png)

**Formulario de caja chica:**
- **Información general**: Nombre, código, ubicación
- **Configuración financiera**: Monto inicial, límite, cuenta contable
- **Responsables**: Custodio principal y suplentes
- **Políticas de uso**: Tipos de gasto permitidos, límites por transacción
- **Configuración de aprobación**: Flujo de autorizaciones
- **Historial**: Registro de operaciones y reposiciones

**Proceso de creación:**
1. **Definición de parámetros**: Configuración inicial del fondo
2. **Asignación de responsable**: Designación del custodio
3. **Apertura del fondo**: Registro del monto inicial
4. **Generación de comprobante**: Documento para entrega de efectivo
5. **Activación**: Habilitación para registro de gastos

**Configuración avanzada:**
- **Plantillas de gastos**: Conceptos predefinidos con cuentas contables
- **Restricciones por usuario**: Control de acceso a fondos específicos
- **Alertas automáticas**: Notificaciones por saldo bajo o gastos pendientes
- **Reportes personalizados**: Informes de uso y rendición de cuentas
- **Cierre temporal**: Bloqueo por ausencia del responsable

### 11.2. Reposiciones de Caja Chica

El proceso de reposición permite restablecer el fondo de caja chica después de registrar los gastos realizados, manteniendo la operatividad continua del fondo.

![Reposiciones caja chica](odoo%2016%20módulos/95_reposiciones%20caja%20chica.png)

**Características principales:**
- **Reposición basada en gastos**: Reembolso exacto de lo consumido
- **Validación de comprobantes**: Verificación de documentos de respaldo
- **Aprobación multinivel**: Flujo configurable según montos
- **Contabilización automática**: Asientos por categoría de gasto
- **Trazabilidad completa**: Historial de todas las reposiciones
- **Cumplimiento fiscal**: Validación de requisitos tributarios

**Panel de reposiciones:**
- **Lista de solicitudes**: Reposiciones en diferentes estados
- **Caja relacionada**: Fondo al que corresponde
- **Monto solicitado**: Valor total a reponer
- **Estado**: Borrador, en aprobación, aprobado, pagado
- **Responsable**: Solicitante de la reposición
- **Fecha**: Registro cronológico del proceso

![Reposiciones caja chica detalle](odoo%2016%20módulos/96_reposiciones%20caja%20chica%20detalle.png)

**Formulario de reposición:**
- **Información general**: Caja, período, responsable
- **Gastos incluidos**: Detalle de transacciones a reponer
- **Documentos de respaldo**: Facturas y comprobantes adjuntos
- **Distribución contable**: Clasificación por cuenta y centro de costo
- **Flujo de aprobación**: Estado actual y próximos aprobadores
- **Método de reposición**: Efectivo, transferencia, cheque

**Proceso completo:**
1. **Registro de gastos**: Documentación de desembolsos realizados
2. **Adjunto de comprobantes**: Carga de respaldos fiscales
3. **Solicitud de reposición**: Generación del pedido de reembolso
4. **Aprobación**: Validación según niveles configurados
5. **Emisión de pago**: Restitución del monto al fondo
6. **Contabilización**: Registro en cuentas correspondientes
7. **Actualización de saldo**: Incremento del disponible en caja

**Funcionalidades avanzadas:**
- **Reposición parcial**: Posibilidad de reponer solo gastos seleccionados
- **Anticipos extraordinarios**: Incrementos temporales del fondo
- **Validación fiscal**: Verificación automática de comprobantes
- **Liquidación de caja**: Proceso de cierre definitivo
- **Arqueos sorpresivos**: Registro de verificaciones no programadas
- **Reportes gerenciales**: Análisis de uso por categoría y período

## 12. REPORTES FINANCIEROS

### 12.1. Menús de Informes

El sistema ofrece un completo conjunto de reportes financieros adaptados a los requerimientos contables y fiscales ecuatorianos, accesibles desde un menú centralizado.

![Informe menu](odoo%2016%20módulos/97_informe%20menu.png)

**Características principales:**
- **Reportes oficiales**: Formatos adaptados a normativa local
- **Informes gerenciales**: Análisis para toma de decisiones
- **Reportes fiscales**: Información para declaraciones tributarias
- **Exportación múltiple**: Generación en PDF, Excel, HTML
- **Filtros avanzados**: Selección por período, cuenta, dimensión analítica
- **Comparativos**: Análisis entre períodos o presupuestos

**Categorías principales:**
- **Contabilidad general**: Balances y estados financieros
- **Impuestos**: Reportes para declaraciones fiscales
- **Cartera**: Análisis de cuentas por cobrar y pagar
- **Bancos**: Conciliaciones y flujos de efectivo
- **Analítica**: Reportes por centro de costo o proyecto

![Informe menu 2](odoo%2016%20módulos/98_informe%20menu%202.png)

**Menú extendido:**
- **Reportes legales**: Formatos oficiales para entidades reguladoras
- **Reportes operativos**: Análisis de gestión diaria
- **Reportes de auditoría**: Verificación y control interno
- **Reportes personalizados**: Informes configurados por el usuario
- **Dashboards**: Paneles visuales con indicadores clave

**Funcionalidades comunes:**
- **Períodos fiscales**: Selección de rangos de fecha
- **Niveles de detalle**: Desde resumen hasta máximo desglose
- **Filtros contextuales**: Opciones específicas según tipo de reporte
- **Vistas previas**: Visualización antes de generación final
- **Programación**: Generación automática periódica
- **Distribución**: Envío automático por correo electrónico

### 12.2. Balance de Situación

El Balance de Situación (Estado de Situación Financiera) presenta la posición financiera de la empresa en un momento determinado, adaptado a la normativa contable ecuatoriana.

![Balance de situación](odoo%2016%20módulos/99_balance%20de%20situacion.png)

**Características principales:**
- **Estructura normalizada**: Formato adaptado a requerimientos locales
- **Múltiples niveles**: Visualización desde resumen hasta detalle
- **Comparativo**: Contraste con períodos anteriores
- **Análisis vertical**: Porcentajes sobre total de activos
- **Notas explicativas**: Espacio para aclaraciones contables
- **Firmas digitales**: Inclusión de responsables (contador, gerente)

**Secciones principales:**
- **Activos**: Corrientes, no corrientes, diferidos
- **Pasivos**: Corrientes, no corrientes, provisiones
- **Patrimonio**: Capital, reservas, resultados acumulados
- **Cuentas de orden**: Registros informativos fuera de balance

**Funcionalidades específicas:**
- **Ajuste por inflación**: Opcional según normativa vigente
- **Conversión de moneda**: Para reportes en dólares y moneda funcional
- **Consolidación**: Para grupos empresariales
- **Segmentación**: Por sucursal o unidad de negocio
- **Conciliación patrimonial**: Análisis de variaciones

**Opciones de generación:**
- **Fechas flexibles**: Cualquier corte dentro del período abierto
- **Filtros contables**: Por diario, cuenta o etiqueta
- **Formatos de salida**: PDF, Excel, HTML
- **Inclusión de gráficos**: Visualización de composición
- **Drill-down**: Navegación hasta transacciones origen

### 12.3. Estado de Pérdidas y Ganancias

El Estado de Resultados muestra el desempeño económico de la empresa durante un período, con clasificación adaptada a los requerimientos ecuatorianos.

![Pérdidas y ganancias](odoo%2016%20módulos/100_perdidas%20y%20ganancias.png)

**Características principales:**
- **Estructura por naturaleza**: Clasificación según tipo de ingreso/gasto
- **Estructura por función**: Agrupación por área funcional
- **Múltiples períodos**: Comparativo mensual, trimestral, anual
- **Análisis horizontal**: Variaciones entre períodos
- **Análisis vertical**: Porcentajes sobre ingresos totales
- **Indicadores clave**: Márgenes y ratios de rentabilidad

**Secciones principales:**
- **Ingresos operacionales**: Ventas de bienes y servicios
- **Costo de ventas**: Costo directo de productos vendidos
- **Gastos operacionales**: Administración, ventas, producción
- **Resultados financieros**: Intereses y diferencias cambiarias
- **Otros ingresos/gastos**: Conceptos no operacionales
- **Participación trabajadores**: Cálculo del 15% según legislación
- **Impuesto a la renta**: Determinación del impuesto causado

**Funcionalidades específicas:**
- **Desglose por impuesto**: Separación de bases gravadas y exentas
- **Conciliación tributaria**: Ajustes para determinación fiscal
- **Análisis de contribución**: Rentabilidad por línea de producto
- **Proyecciones**: Comparativo con presupuesto
- **Tendencias**: Gráficos de evolución temporal

**Opciones de generación:**
- **Períodos acumulados o individuales**: Mensual vs. año a la fecha
- **Nivel de detalle configurable**: Desde resumen hasta máximo desglose
- **Agrupación alternativa**: Por categoría, proyecto o departamento
- **Formatos oficiales**: Adaptación a formularios SRI
- **Exportación múltiple**: PDF, Excel, XML para declaraciones

### 12.4. Estado de Flujos de Efectivo

Este reporte muestra los movimientos de efectivo clasificados por actividades, permitiendo analizar la generación y uso de liquidez durante el período.

![Estado de flujos de efectivo](odoo%2016%20módulos/101_estadi%20de%20flujos%20de%20efectivo.png)

**Características principales:**
- **Método directo**: Clasificación directa de cobros y pagos
- **Método indirecto**: Partiendo del resultado neto con ajustes
- **Conciliación de saldos**: Verificación con cuentas de efectivo
- **Análisis de variaciones**: Cambios en posición de liquidez
- **Proyección**: Estimación de flujos futuros
- **Indicadores de liquidez**: Ratios derivados del flujo

**Secciones principales:**
- **Actividades operativas**: Relacionadas con operación principal
- **Actividades de inversión**: Adquisición/venta de activos de largo plazo
- **Actividades de financiamiento**: Cambios en estructura de capital
- **Efecto de variación cambiaria**: Para operaciones en moneda extranjera
- **Conciliación final**: Cuadre con saldos contables

**Funcionalidades específicas:**
- **Clasificación automática**: Categorización inteligente de transacciones
- **Ajustes no monetarios**: Identificación de movimientos sin efecto en caja
- **Análisis de ciclo de efectivo**: Rotación de inventario, cobros y pagos
- **Tendencias estacionales**: Identificación de patrones temporales
- **Flujo libre de caja**: Cálculo para análisis de inversiones

**Opciones de generación:**
- **Períodos comparativos**: Análisis de evolución temporal
- **Detalle por cuenta**: Desglose de componentes principales
- **Visualización gráfica**: Representación de flujos principales
- **Formato NIC 7**: Cumplimiento de estándar internacional
- **Exportación analítica**: Para modelos financieros externos

### 12.5. Resumen Ejecutivo

El Resumen Ejecutivo proporciona una visión consolidada de los principales indicadores financieros y operativos para la toma de decisiones gerenciales.

![Resumen ejecutivo](odoo%2016%20módulos/102_resumen%20ejecutivo.png)

**Características principales:**
- **Dashboard integrado**: Visualización de KPIs principales
- **Tendencias clave**: Evolución de indicadores críticos
- **Alertas automáticas**: Notificación de desviaciones importantes
- **Análisis comparativo**: Contraste con períodos anteriores y presupuesto
- **Visualización personalizable**: Adaptación a necesidades gerenciales
- **Actualización en tiempo real**: Datos sincronizados con operaciones

**Componentes principales:**
- **Indicadores de rentabilidad**: Márgenes, ROI, EBITDA
- **Indicadores de liquidez**: Razón corriente, prueba ácida, capital de trabajo
- **Indicadores de actividad**: Rotación de inventario, cartera, proveedores
- **Indicadores de endeudamiento**: Apalancamiento, cobertura de intereses
- **Indicadores operativos**: Volumen de ventas, nuevos clientes, devoluciones
- **Proyecciones**: Tendencias esperadas a corto plazo

**Funcionalidades específicas:**
- **Drill-down interactivo**: Navegación desde resumen hasta detalle
- **Umbrales configurables**: Definición de rangos aceptables por indicador
- **Benchmarking**: Comparación con estándares de la industria
- **Escenarios hipotéticos**: Simulación de cambios en variables clave
- **Calendario fiscal**: Recordatorio de obligaciones próximas

**Opciones de visualización:**
- **Tableros personalizados**: Configuración según perfil de usuario
- **Gráficos interactivos**: Visualización dinámica de datos
- **Exportación ejecutiva**: Formatos para presentaciones
- **Envío programado**: Distribución automática a directivos
- **Versión móvil**: Acceso desde dispositivos portátiles

### 12.6. Informes de Impuestos

Los reportes de impuestos proporcionan información detallada para el cumplimiento de obligaciones tributarias según la normativa ecuatoriana.

![Informe impuestos](odoo%2016%20módulos/103_informe%20impuestos.png)

**Características principales:**
- **Reportes por período fiscal**: Mensual, semestral, anual
- **Clasificación por tipo de impuesto**: IVA, Renta, ICE, etc.
- **Desglose por código SRI**: Según catálogo oficial
- **Conciliación automática**: Verificación de consistencia
- **Formatos oficiales**: Adaptados a declaraciones
- **Exportación para DIMM**: Compatible con software SRI

**Tipos de informes disponibles:**
- **Resumen de IVA**: Ventas y compras por tarifa
- **Retenciones efectuadas**: Por tipo y porcentaje
- **Retenciones recibidas**: De clientes y agentes de retención
- **Anticipos de impuesto**: Cálculo y seguimiento
- **Impuestos especiales**: ICE, ISD, otros específicos
- **Anexos fiscales**: Preparación para ATS, APS, etc.

**Funcionalidades específicas:**
- **Validación previa**: Verificación de inconsistencias
- **Ajustes automáticos**: Corrección de diferencias por redondeo
- **Conciliación con contabilidad**: Cuadre con cuentas de impuestos
- **Historial de declaraciones**: Seguimiento de presentaciones anteriores
- **Calendario tributario**: Alertas de vencimientos

**Opciones de generación:**
- **Vista preliminar**: Revisión antes de declaración oficial
- **Exportación múltiple**: PDF, Excel, XML
- **Nivel de detalle**: Desde resumen hasta transacción individual
- **Filtros avanzados**: Por establecimiento, tipo de contribuyente, etc.
- **Reportes ad-hoc**: Consultas personalizadas para auditoría

### 12.7. Libro Mayor

El Libro Mayor proporciona el detalle de movimientos por cuenta contable, permitiendo el análisis y seguimiento de saldos durante el período fiscal.

![Libro mayor 1](odoo%2016%20módulos/104_libro%20mayor%201.png)

![Libro mayor 2](odoo%2016%20módulos/105_libro%20mayor%202.png)

**Características principales:**
- **Detalle cronológico**: Movimientos ordenados por fecha
- **Saldos progresivos**: Cálculo de balance después de cada movimiento
- **Múltiples niveles**: Desde cuentas principales hasta auxiliares
- **Trazabilidad completa**: Vínculo a documentos origen
- **Conciliación bancaria**: Estado de partidas pendientes
- **Formato oficial**: Cumplimiento de requisitos legales

**Información disponible:**
- **Código y nombre de cuenta**: Identificación según plan contable
- **Fecha de registro**: Cronología de transacciones
- **Referencia y descripción**: Detalle explicativo del movimiento
- **Documento origen**: Factura, pago, asiento manual, etc.
- **Débitos y créditos**: Valores registrados en cada movimiento
- **Saldo acumulado**: Balance actualizado tras cada transacción

**Funcionalidades específicas:**
- **Filtrado multinivel**: Por período, diario, etiqueta, etc.
- **Búsqueda avanzada**: Localización por monto o descripción
- **Agrupación flexible**: Por día, semana, mes o documento
- **Conciliación visual**: Identificación de partidas pendientes
- **Análisis de antigüedad**: Para cuentas de balance

**Opciones de generación:**
- **Selección de cuentas**: Individual, grupo o rango
- **Períodos personalizados**: Cualquier rango de fechas
- **Nivel de detalle**: Desde resumen hasta máximo desglose
- **Formatos de salida**: PDF, Excel, CSV
- **Inclusión de asientos no contabilizados**: Opción para revisión

### 12.8. Balance General

Versión alternativa del Estado de Situación Financiera con formato y opciones adicionales adaptadas a requerimientos específicos.

![Balance general](odoo%2016%20módulos/106_balance%20general.png)

**Características diferenciales:**
- **Formato condensado**: Presentación más ejecutiva
- **Agrupación alternativa**: Clasificación personalizable
- **Análisis comparativo**: Múltiples períodos en paralelo
- **Visualización gráfica**: Composición de activos y pasivos
- **Indicadores integrados**: Ratios financieros calculados
- **Notas automáticas**: Generación de revelaciones contables

**Secciones especiales:**
- **Activos contingentes**: Derechos potenciales
- **Pasivos contingentes**: Obligaciones potenciales
- **Cuentas de orden**: Registros informativos
- **Conciliación patrimonial**: Análisis de variaciones
- **Revelaciones obligatorias**: Según normativa contable

**Funcionalidades adicionales:**
- **Múltiples esquemas**: Adaptación a diferentes normativas (NEC, NIIF)
- **Consolidación avanzada**: Para grupos empresariales complejos
- **Conversión monetaria**: Reportes en moneda funcional y de presentación
- **Ajustes de cierre**: Inclusión de asientos preliminares
- **Simulación de escenarios**: Proyección de impactos

**Opciones específicas:**
- **Períodos fiscales o calendarios**: Flexibilidad en cortes
- **Niveles de aprobación**: Flujo para revisión y publicación
- **Comparativo presupuestal**: Contraste con proyecciones
- **Exportación estructurada**: Para presentación a entidades reguladoras
- **Historial de versiones**: Seguimiento de modificaciones

### 12.9. Journal Report

El informe de diarios contables proporciona un análisis detallado de los asientos registrados, facilitando la auditoría y control interno.

![Journal report 1](odoo%2016%20módulos/107_journal%20report1.png)

![Journal report 2](odoo%2016%20módulos/108_journal%20report2.png)

**Características principales:**
- **Organización por diario**: Agrupación según origen contable
- **Secuencia cronológica**: Ordenamiento por fecha de registro
- **Detalle de asientos**: Visualización completa de cada transacción
- **Verificación de cuadre**: Validación de débitos y créditos
- **Trazabilidad documental**: Vínculos a documentos origen
- **Identificación de usuario**: Registro de responsable de cada asiento

**Información disponible:**
- **Diario contable**: Ventas, compras, bancos, operaciones, etc.
- **Número y fecha**: Identificación única de cada asiento
- **Referencia y descripción**: Detalle explicativo
- **Cuentas utilizadas**: Códigos según plan contable
- **Importes registrados**: Débitos y créditos por línea
- **Documentos relacionados**: Facturas, pagos, etc.

**Funcionalidades específicas:**
- **Filtrado por diario**: Análisis de un tipo específico de transacciones
- **Rango de fechas personalizable**: Período de análisis flexible
- **Búsqueda por referencia**: Localización de asientos específicos
- **Verificación de secuencia**: Control de numeración consecutiva
- **Identificación de ajustes**: Asientos manuales vs. automáticos

**Opciones de generación:**
- **Selección múltiple de diarios**: Combinación para análisis integral
- **Nivel de agrupación**: Por día, documento o asiento individual
- **Inclusión de anulados**: Opción para mostrar asientos cancelados
- **Formatos de salida**: PDF, Excel, CSV
- **Ordenamiento configurable**: Por número, fecha o importe
