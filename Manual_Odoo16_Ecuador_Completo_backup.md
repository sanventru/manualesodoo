# MANUAL DE USUARIO: SISTEMA ODOO 16 COMMUNITY ADAPTADO A LA LEGISLACIÓN ECUATORIANA

**Versión 1.0**  
**Mayo 2025**

## ÍNDICE DE CONTENIDOS

1. **INTRODUCCIÓN**
   1.1. Sobre este Manual  
   1.2. Requisitos del Sistema  
   1.3. Acceso al Sistema

2. **CONFIGURACIÓN INICIAL**  
   2.1. Ajustes Generales  
   2.2. Gestión de Usuarios y Permisos  
   2.3. Configuración de Compañías  
   2.4. Configuración de Documentos Electrónicos  
   2.5. Configuración SRI

3. **VENTAS**  
   3.1. Menú de Ventas  
   3.2. Creación de Cotizaciones  
   3.3. Gestión de Pedidos  
   3.4. Configuración de Ventas

4. **COMPRAS**  
   4.1. Requisiciones de Compra  
   4.2. Solicitudes de Presupuesto  
   4.3. Órdenes de Compra  
   4.4. Recepción de Productos

5. **INVENTARIO**  
   5.1. Gestión de Productos  
   5.2. Movimientos de Inventario  
   5.3. Operaciones de Inventario  
   5.4. Kardex de Productos

6. **FACTURACIÓN**  
   6.1. Facturas de Clientes  
   6.2. Notas de Crédito  
   6.3. Reembolsos  
   6.4. Gestión de Pagos  
   6.5. Facturas de Proveedores  
   6.6. Liquidaciones de Compra  
   6.7. Recibos de Proveedores  
   6.8. Gastos de Empleados

7. **CONTABILIDAD**  
   7.1. Asientos Contables  
   7.2. Apuntes Contables  
   7.3. Apuntes Analíticos  
   7.4. Presupuestos  
   7.5. Conciliación Bancaria  
   7.6. Histórico de Movimientos  
   7.7. Chequeras y Gestión de Cheques

8. **ACTIVOS**  
   8.1. Gestión de Activos  
   8.2. Depreciaciones  
   8.3. Gastos Diferidos

9. **TALENTO HUMANO Y NÓMINA**  
   9.1. Gestión de Empleados  
   9.2. Contratos  
   9.3. Nómina  
   9.4. Configuración de Nómina  
   9.5. Gestión de Ausencias

10. **PROCESOS SRI**  
    10.1. Carga de Documentos Electrónicos  
    10.2. XML Enviados al SRI  
    10.3. Retenciones de Compra  
    10.4. Retenciones de Venta  
    10.5. Anexo Transaccional Simplificado (ATS)

11. **CAJAS CHICAS**  
    11.1. Configuración de Cajas Chicas  
    11.2. Reposiciones de Caja Chica

12. **REPORTES FINANCIEROS**  
    12.1. Balance de Situación  
    12.2. Estado de Pérdidas y Ganancias  
    12.3. Estado de Flujos de Efectivo  
    12.4. Resumen Ejecutivo  
    12.5. Informes de Impuestos  
    12.6. Libro Mayor  
    12.7. Reportes por Cobrar/Pagar  
    12.8. Reportes Financieros Ecuador  
    12.9. Estados de Cuenta Cliente

13. **GLOSARIO**

---

## 1. INTRODUCCIÓN

### 1.1. Sobre este Manual

Este manual describe el sistema Odoo 16 Community personalizado para cumplir con los requerimientos fiscales y contables establecidos por la legislación ecuatoriana. El sistema incorpora módulos específicos para Ecuador, como facturación electrónica, ATS, retenciones y reportes financieros adaptados a la normativa local.

### 1.2. Requisitos del Sistema

Para un funcionamiento óptimo del sistema, se recomienda:
- Navegador web actualizado (Chrome, Firefox, Edge)
- Conexión a internet estable
- Certificado digital válido para firma electrónica (para documentos electrónicos)

### 1.3. Acceso al Sistema

El acceso al sistema se realiza a través de la pantalla de inicio de sesión donde debe ingresar sus credenciales de usuario.

![Pantalla de login](odoo%2016%20módulos/1_login.png)

Una vez autenticado, accederá a la bandeja principal del sistema.

![Bandeja principal](odoo%2016%20módulos/2_bandeja.png)

Desde la bandeja principal, podrá acceder a todos los módulos del sistema a través del menú principal.

![Menús](odoo%2016%20módulos/3_menús.png)

---

## 2. CONFIGURACIÓN INICIAL

### 2.1. Ajustes Generales

Los ajustes generales permiten configurar parámetros básicos del sistema. Acceda desde el menú principal seleccionando "Ajustes".

![Ajustes estándar](odoo16%20ajustes%20y%20funciones%20estandar/1%20ajustes%20standar%20ajustes.png)

En esta sección podrá configurar:
- Parámetros técnicos
- Idiomas del sistema
- Formatos de fecha y hora
- Unidades de medida
- Moneda y formato de números

### 2.2. Gestión de Usuarios y Permisos

Esta sección permite crear y modificar usuarios, asignar permisos y definir roles dentro del sistema.

![Gestión de usuarios](odoo16%20ajustes%20y%20funciones%20estandar/2%20gestion%20de%20usuarios%20standar%20ajustes.png)

Los usuarios pueden tener diferentes niveles de acceso según sus responsabilidades:

![Acciones en usuarios](odoo16%20ajustes%20y%20funciones%20estandar/menu%20acciones%20en%20usuarios%20standar%20ajustes.png)

Cada usuario puede tener una configuración personalizada:

![Usuario](odoo16%20ajustes%20y%20funciones%20estandar/usuario%20standar%20ajustes.png)

Para crear un nuevo usuario:
1. Vaya a Ajustes > Usuarios y compañías > Usuarios
2. Haga clic en "Crear"
3. Complete la información del usuario: nombre, correo electrónico, contraseña
4. Asigne grupos de acceso según las responsabilidades del usuario
5. Guarde los cambios

### 2.3. Configuración de Compañías

El sistema permite la gestión multicompañía, facilitando el manejo de varias empresas desde la misma plataforma.

![Compañías](odoo16%20ajustes%20y%20funciones%20estandar/5%20companias%20standar%20ajustes.png)

Puede configurar información detallada para cada compañía:

![Detalle de compañías](odoo16%20ajustes%20y%20funciones%20estandar/6%20companias%20detalle%20standar%20ajustes.png)

Para cada compañía puede configurar:
- Información legal (RUC, razón social, nombre comercial)
- Dirección y contacto
- Logotipo e imagen corporativa
- Parámetros contables y fiscales específicos
- Información de compañía matriz/subsidiaria

### 2.4. Configuración de Documentos Electrónicos

La facturación electrónica es obligatoria en Ecuador. Esta sección permite configurar los parámetros necesarios para la emisión de documentos electrónicos.

![Configuración de documentos electrónicos](odoo16%20ajustes%20y%20funciones%20estandar/7%20configuracion%20de%20documentos%20electronicos%20standar%20ajustes.png)

Los ajustes incluyen configuraciones para diferentes tipos de documentos:

![Configuración documentos electrónicos 1](odoo16%20ajustes%20y%20funciones%20estandar/docs%20electronicos%20settings%201%20standar%20ajustes.png)

![Configuración documentos electrónicos 2](odoo16%20ajustes%20y%20funciones%20estandar/9%20docs%20electronicos%20settings%202%20standar%20ajustes.png)

![Configuración documentos electrónicos 3](odoo16%20ajustes%20y%20funciones%20estandar/10%20docs%20electronicos%20settings%203%20standar%20ajustes.png)

![Configuración documentos electrónicos 4](odoo16%20ajustes%20y%20funciones%20estandar/11%20docs%20electronicos%20settings%204%20standar%20ajustes.png)

Los elementos principales de configuración incluyen:
- Certificado digital para firma electrónica
- Ambiente de trabajo (pruebas o producción)
- Configuración de correo para envío de documentos
- Secuencias de numeración para cada tipo de documento
- Plantillas de documentos electrónicos

### 2.5. Configuración SRI

Esta sección permite configurar los parámetros relacionados con el Servicio de Rentas Internas (SRI) de Ecuador.

![Configuración SRI](odoo16%20ajustes%20y%20funciones%20estandar/12%20settings%20sri%20standar%20ajustes.png)

Incluye configuraciones adicionales para cumplimiento tributario:

![Configuración SRI 2](odoo16%20ajustes%20y%20funciones%20estandar/13%20settings%20sri%202%20standar%20ajustes.png)

En esta sección puede configurar:
- Códigos de impuestos según normativa SRI
- Porcentajes de retención vigentes
- Parámetros para generación del ATS
- Configuración de conexión con servicios web del SRI
## 3. VENTAS

### 3.1. Menú de Ventas

El módulo de ventas permite gestionar todo el ciclo comercial, desde cotizaciones hasta facturación.

![Ventas](odoo%2016%20módulos/7_ventas.png)

El módulo de ventas incluye las siguientes funcionalidades principales:
- Gestión de cotizaciones
- Pedidos de venta
- Seguimiento de oportunidades
- Generación de facturas
- Reportes de ventas
- Configuración de productos y precios

### 3.2. Creación de Cotizaciones

Para crear una nueva cotización, acceda desde el menú de ventas a la opción "Cotizaciones" y seleccione "Crear".

![Nueva cotización](odoo%2016%20módulos/8_nueva%20venta%20cotizacion.png)

Al crear una cotización debe:
1. Seleccionar el cliente
2. Establecer condiciones comerciales (plazo de pago, validez)
3. Agregar líneas de productos o servicios
4. Aplicar descuentos si corresponde
5. Guardar o enviar para aprobación

### 3.3. Gestión de Pedidos

Los pedidos se generan a partir de cotizaciones aprobadas. Puede gestionarlos desde la sección "Pedidos".

![Menú pedidos](odoo%2016%20módulos/9_ventas%20menu%20pedidos.png)

También puede verificar los elementos pendientes por facturar:

![Menú a facturar](odoo%2016%20módulos/10_ventas%20menu%20a%20facturar.png)

El proceso de pedidos incluye:
- Confirmación de pedido
- Verificación de disponibilidad
- Preparación de envío
- Facturación
- Seguimiento post-venta

### 3.4. Configuración de Ventas

Esta sección permite ajustar parámetros específicos del proceso de ventas.

![Configuración de ventas](odoo%2016%20módulos/11_ventas%20configuracion.png)

En configuración puede definir:
- Políticas de facturación
- Etapas del proceso de venta
- Plantillas de documentos
- Reglas de precios y descuentos
- Equipos de venta y comisiones

---

## 4. COMPRAS

### 4.1. Requisiciones de Compra

Las requisiciones de compra son solicitudes internas para adquirir productos o servicios.

![Requisiciones de compra](odoo%2016%20módulos/4_requisiciones%20de%20compra.png)

Para crear una nueva requisición:

![Nueva requisición](odoo%2016%20módulos/5_nueva%20requisición%20de%20compra.png)

El proceso incluye solicitud de aprobación:

![Solicitud de aprobación](odoo%2016%20módulos/6_requisiciones%20de%20compra%20solicita%20aprobacion.png)

El flujo de trabajo de requisiciones incluye:
1. Creación de la solicitud por el usuario
2. Revisión por el responsable de compras
3. Aprobación según niveles de autorización
4. Generación de solicitud de presupuesto a proveedores
5. Seguimiento hasta la recepción del producto o servicio

### 4.2. Solicitudes de Presupuesto

El módulo de compras permite gestionar todo el proceso de adquisiciones:

![Compras](odoo%2016%20módulos/12_compras.png)

### 4.3. Órdenes de Compra

Para solicitar cotizaciones a proveedores:

![Solicitud de presupuesto](odoo%2016%20módulos/13_nueva%20solicitud%20de%20presupuesto.png)

Al crear una orden de compra debe:
1. Seleccionar el proveedor
2. Establecer condiciones comerciales (plazo de pago, fecha de entrega)
3. Agregar líneas de productos o servicios
4. Confirmar la orden
5. Dar seguimiento a la recepción y facturación

### 4.4. Recepción de Productos

El proceso de compra incluye la recepción de productos:
1. Verificación de la orden de compra
2. Registro de la recepción (completa o parcial)
3. Control de calidad
4. Actualización de inventario
5. Proceso de facturación

---

## 5. INVENTARIO

### 5.1. Gestión de Inventario

El módulo de inventario permite controlar existencias, movimientos y valoración de productos.

![Inventario](odoo%2016%20módulos/14_inventario.png)

Las principales funcionalidades incluyen:
- Gestión de almacenes y ubicaciones
- Control de stock
- Movimientos de entrada y salida
- Transferencias entre ubicaciones
- Inventarios físicos
- Valoración de existencias
- Reglas de abastecimiento
- Trazabilidad de productos (lotes y series)

### 5.2. Movimientos de Inventario

Los movimientos de inventario registran entradas, salidas y transferencias de productos:
- Recepción de compras
- Entregas de ventas
- Ajustes de inventario
- Producciones
- Desechos y pérdidas

### 5.3. Operaciones de Inventario

Las operaciones de inventario incluyen:
- Recepciones
- Entregas
- Transferencias internas
- Tomas físicas
- Ajustes de inventario

### 5.4. Kardex de Productos

El kardex permite visualizar todos los movimientos de un producto y su valoración:
- Movimientos históricos
- Valoración FIFO, LIFO o Promedio
- Cantidades y valores por movimiento
- Saldos acumulados
- Reportes por producto, categoría o almacén

---

## 6. FACTURACIÓN

### 6.1. Módulo de Facturación

El módulo de facturación centraliza todas las operaciones relacionadas con documentos fiscales.

![Facturación](odoo%2016%20módulos/26_facturacion.png)

Las principales secciones incluyen:
- Facturas a clientes
- Facturas rectificativas (notas de crédito)
- Pagos
- Informes de seguimiento
- Productos
- Clientes

### 6.2. Facturas de Clientes

Gestión completa de facturas emitidas a clientes:

![Facturas de clientes](odoo%2016%20módulos/27_facturacion_clientes_facturas.png)

Para crear una nueva factura:

![Nueva factura](odoo%2016%20módulos/33_nueva%20factura.png)

El sistema permite generar diferentes tipos de documentos fiscales:

![Nueva factura - nota de crédito](odoo%2016%20módulos/34_nueva%20factura%20(es%20nota%20de%20credito%20externa).png)

![Nueva factura - reembolso](odoo%2016%20módulos/35_nueva%20factura%20(es%20reembolso%20externa).png)

Menús disponibles en la creación de facturas:

![Menús en nueva factura](odoo%2016%20módulos/36_Menus%20en%20Nueva%20Factura.png)

El proceso de facturación incluye:
1. Creación del documento (manual o desde pedido de venta)
2. Validación
3. Generación del documento electrónico
4. Envío al SRI
5. Envío al cliente
6. Registro de pago
7. Contabilización

### 6.3. Notas de Crédito

Las facturas rectificativas o notas de crédito permiten ajustar facturas emitidas previamente:

![Facturas rectificativas](odoo%2016%20módulos/28_facturas_rectificativas.png)

Detalle de facturas rectificativas:

![Detalle de facturas rectificativas](odoo%2016%20módulos/37_facturas%20rectificativas.png)

Creación de una nueva factura rectificativa:

![Nueva factura rectificativa](odoo%2016%20módulos/38_nueva%20factura%20rectificativa.png)

Vista de factura rectificativa a cliente:

![Factura rectificativa cliente](odoo%2016%20módulos/39_factura%20rectificativa%20cliente.png)

Los tipos de notas de crédito incluyen:
- Devolución de productos
- Anulación de factura
- Descuentos posteriores
- Corrección de errores

### 6.4. Gestión de Pagos

Control de pagos recibidos de clientes:

![Facturación pagos](odoo%2016%20módulos/29_facturacion%20pagos.png)

Detalle de pagos:

![Facturas pagos detalle](odoo%2016%20módulos/40_facturas%20pagos%20detalle.png)

El registro de pagos permite:
- Conciliar facturas con pagos
- Registrar pagos parciales
- Utilizar diferentes métodos de pago
- Gestionar anticipos
- Controlar vencimientos

### 6.5. Informes de Seguimiento

Reportes para monitorear el estado de la facturación:

![Informes de seguimiento](odoo%2016%20módulos/30_facturacion%20informes%20de%20seguimiento.png)

Detalle de informes:

![Informe de seguimiento detalle](odoo%2016%20módulos/41_informe%20de%20seguimiento%20detalle.png)

Los informes incluyen:
- Estado de cuentas por cobrar
- Antigüedad de saldos
- Previsión de cobros
- Análisis de ventas
- Reportes fiscales

### 6.6. Facturas de Proveedores

Gestión de facturas recibidas de proveedores:

![Proveedores factura](odoo%2016%20módulos/44_proveedores%20factura.png)

Detalle de factura de proveedor:

![Proveedores factura detalle](odoo%2016%20módulos/45_proceedores%20factura%20detalle.png)

El proceso de facturas de proveedores incluye:
1. Registro de la factura (manual o desde orden de compra)
2. Validación y aprobación
3. Registro de retenciones
4. Programación de pago
5. Contabilización

### 6.7. Liquidaciones de Compra

Las liquidaciones de compra se utilizan para transacciones con proveedores que no emiten facturas:

![Liquidaciones de compra](odoo%2016%20módulos/46_liquidaciones%20de%20compra.png)

Detalle de liquidación de compra:

![Liquidaciones de compra detalle](odoo%2016%20módulos/47_liquidaciones%20de%20compra%20detalle.png)

Las liquidaciones de compra son utilizadas para:
- Compras a personas naturales sin actividad empresarial
- Adquisiciones de servicios ocasionales
- Operaciones con proveedores informales
- Compras en el sector agrícola o pesquero

### 6.8. Reembolsos

Gestión de reembolsos:

![Reembolsos](odoo%2016%20módulos/48_reembolsos.png)

Detalle de reembolsos:

![Reembolsos detalle](odoo%2016%20módulos/49_reempbolsos%20detalle.png)

Los reembolsos se utilizan para:
- Gastos realizados por empleados
- Pagos efectuados por terceros
- Reintegro de gastos
- Recuperación de valores anticipados
### 6.9. Recibos de Proveedores

Control de recibos emitidos por proveedores:

![Proveedores recibos](odoo%2016%20módulos/50_proveedores%20recibos.png)

Detalle de recibos:

![Proveedores recibos detalle](odoo%2016%20módulos/51_proveedores%20recibos%20detalle.png)

Los recibos de proveedores permiten:
- Registrar pagos anticipados
- Documentar abonos a facturas
- Controlar anticipos y saldos
- Conciliar pagos con facturas pendientes

### 6.10. Pagos a Proveedores

Gestión de pagos realizados a proveedores:

![Facturas pagos](odoo%2016%20módulos/52_facturas%20pagos.png)

Detalle de pagos:

![Factura proveedores pagos](odoo%2016%20módulos/53_factura%20proveedores%20pagos.png)

El sistema permite:
- Registrar diferentes métodos de pago
- Pagos individuales o por lotes
- Conciliación automática con facturas
- Programación de pagos según vencimientos
- Impresión de comprobantes de pago

### 6.11. Gastos de Empleados

Control de gastos realizados por empleados:

![Proveedores gastos del empleado](odoo%2016%20módulos/54_proveedores%20gastos%20del%20empleado.png)

El módulo permite:
- Registro de gastos por empleado
- Categorización de gastos
- Proceso de aprobación
- Reembolso al empleado
- Contabilización por centros de costo

---

## 7. CONTABILIDAD

### 7.1. Asientos Contables

El módulo de contabilidad permite gestionar todas las operaciones contables de la empresa:

![Contabilidad menu](odoo%2016%20módulos/57_COntabilidad%20menu.png)

Gestión de asientos contables:

![Asientos contables](odoo%2016%20módulos/58_asientos%20contables.png)

Detalle de asiento contable:

![Asientos contables detalle](odoo%2016%20módulos/59_asientos%20contables%20detalle.png)

Los asientos contables:
- Se generan automáticamente desde operaciones (facturas, pagos)
- Pueden crearse manualmente
- Permiten reversiones
- Son auditables con trazabilidad completa
- Cumplen con la normativa contable ecuatoriana

### 7.2. Apuntes Contables

Registro detallado de movimientos contables:

![Apuntes contables](odoo%2016%20módulos/60_apuntes%20contables.png)

Detalle de apuntes:

![Apuntes contables detalle](odoo%2016%20módulos/61_apuntes%20contables%20detalle.png)

Los apuntes contables:
- Constituyen las líneas de los asientos
- Incluyen cuenta, debe, haber, fecha, descripción
- Permiten segmentación analítica
- Facilitan la trazabilidad de operaciones
- Son base para reportes financieros

### 7.3. Apuntes Analíticos

Contabilidad analítica para control de costos:

![Apuntes analíticos](odoo%2016%20módulos/62_apuntes%20analíticos.png)

Detalle de apuntes analíticos:

![Apuntes analíticos detalle](odoo%2016%20módulos/63_apuntes%20analiticos%20detalle.png)

La contabilidad analítica permite:
- Distribución de costos e ingresos por departamentos
- Seguimiento de proyectos y centros de costo
- Análisis de rentabilidad
- Presupuestos por centros de responsabilidad
- Reportes gerenciales segmentados

### 7.4. Presupuestos

Gestión de presupuestos contables:

![Presupuestos](odoo%2016%20módulos/64_presupuestos.png)

Los presupuestos permiten:
- Planificación financiera por período
- Asignación por cuentas y centros de costo
- Comparación con cifras reales
- Control de desviaciones
- Proyecciones y simulaciones

### 7.5. Conciliación Bancaria

Proceso de conciliación de extractos bancarios:

![Conciliación bancaria](odoo%2016%20módulos/72_conciliacion%20bancaria.png)

Detalle del proceso:

![Conciliación bancaria detalle 1](odoo%2016%20módulos/73_conciliacion%20bancaria%20detalle%201.png)

![Conciliación bancaria detalle 2](odoo%2016%20módulos/74_conciliacion%20bancaria%20detalle%202.png)

La conciliación bancaria permite:
- Importación de extractos bancarios
- Conciliación automática por reglas
- Conciliación manual de movimientos
- Creación de registros faltantes
- Seguimiento de partidas pendientes

### 7.6. Histórico de Movimientos

Seguimiento histórico de operaciones bancarias:

![Histórico de movimientos](odoo%2016%20módulos/75_historico%20de%20movimientos.png)

El histórico ofrece:
- Trazabilidad completa de transacciones
- Filtros por período, cuenta, tipo de operación
- Visualización de saldos acumulados
- Exportación a formatos estándar
- Auditoría de movimientos

### 7.7. Chequeras y Gestión de Cheques

Control de chequeras:

![Chequeras](odoo%2016%20módulos/76_chequeras.png)

Detalle de chequeras:

![Chequeras detalle](odoo%2016%20módulos/77_chequeras%20detalle.png)

Gestión de cheques a proveedores:

![Cheques proveedores](odoo%2016%20módulos/78_cheques%20proveedores.png)

Detalle de cheques:

![Cheques proveedores detalle](odoo%2016%20módulos/79_cheques%20proveedores%20detalle.png)

La gestión de cheques incluye:
- Control de numeración de chequeras
- Emisión de cheques a proveedores
- Seguimiento del estado (emitido, cobrado, anulado)
- Impresión de cheques
- Conciliación con pagos registrados

---

## 8. ACTIVOS

### 8.1. Gestión de Activos

Control completo de activos fijos:

![Activos](odoo%2016%20módulos/68_activos.png)

Detalle de activo:

![Activos detalle](odoo%2016%20módulos/69_activos%20detalle.png)

La gestión de activos permite:
- Registro de activos con información técnica y contable
- Categorización y ubicación
- Valoración inicial y reevaluaciones
- Cálculo automático de depreciaciones
- Registro de mantenimientos
- Bajas y ventas de activos

### 8.2. Depreciaciones

Control de depreciaciones de activos:

![Depreciaciones consolidadas](odoo%2016%20módulos/65_depresiaciones%20consolidadas.png)

Detalle de depreciación:

![Depreciaciones detalle](odoo%2016%20módulos/66_depresiaciones%20detalle.png)

Reporte de activos por modelo:

![Reporte activo por modelo](odoo%2016%20módulos/67_reporte%20activo%20por%20modelo.png)

El sistema permite:
- Configuración de métodos de depreciación (lineal, acelerada)
- Generación automática del plan de depreciación
- Contabilización periódica de la depreciación
- Reportes fiscales y contables
- Cumplimiento con normativa tributaria ecuatoriana

### 8.3. Gastos Diferidos

Gestión de gastos diferidos y amortizaciones:

![Gastos diferidos](odoo%2016%20módulos/70_gastos%20diferidos.png)

Detalle de gastos diferidos:

![Gastos diferidos detalle](odoo%2016%20módulos/71_gastos%20diferidos%20detalle.png)

Los gastos diferidos permiten:
- Registro de gastos a amortizar
- Planificación de la amortización
- Contabilización automática
- Seguimiento de saldos pendientes
- Reportes de amortizaciones

---

## 9. TALENTO HUMANO Y NÓMINA

### 9.1. Gestión de Empleados

Administración completa de información de personal:

![Empleados](odoo%2016%20módulos/15_empleados.png)

Ficha detallada por empleado:

![Ficha de empleado](odoo%2016%20módulos/16_ficha%20de%20empleado.png)

Menús disponibles en el módulo:

![Menús empleados](odoo%2016%20módulos/17_menus%20empleados.png)

La gestión de empleados incluye:
- Información personal y de contacto
- Documentación laboral
- Historial profesional y académico
- Dependientes y beneficiarios
- Estructura organizacional
- Evaluaciones de desempeño

### 9.2. Contratos

Gestión de contratos laborales:

![Contratos](odoo%2016%20módulos/18_contratos.png)

Detalle de contrato:

![Contratos detalle](odoo%2016%20módulos/19_contratos%20detalle.png)

Los contratos permiten configurar:
- Tipo de contrato según legislación ecuatoriana
- Salario y beneficios
- Duración y renovaciones
- Jornada laboral
- Estructura salarial
- Beneficios adicionales

### 9.3. Nómina

Procesamiento de nómina adaptado a la legislación ecuatoriana:

![Nómina](odoo%2016%20módulos/20_nomina.png)

Entradas de trabajo:

![Nómina entrada de trabajo](odoo%2016%20módulos/21_nomina%20entrada%20de%20trabajo.png)

Menús de nómina:

![Nómina menus](odoo%2016%20módulos/22_nomina%20menus.png)

Lotes de nómina:

![Lotes nómina](odoo%2016%20módulos/23_lotes%20nómina.png)

El sistema de nómina permite:
- Cálculo automático de salarios
- Gestión de horas extras
- Cálculo de beneficios sociales (décimos, fondos de reserva)
- Gestión de préstamos y anticipos
- Cálculo de aportes al IESS
- Generación de reportes para entidades oficiales

### 9.4. Configuración de Nómina

Parámetros y reglas para el cálculo de nómina:

![Configuración nómina](odoo%2016%20módulos/24_configuracion%20nomina.png)

La configuración incluye:
- Reglas salariales
- Estructura salarial
- Categorías de empleados
- Parámetros IESS
- Configuración de impuesto a la renta
- Beneficios sociales obligatorios

### 9.5. Gestión de Ausencias

Control de vacaciones, permisos y otras ausencias:

![Ausencias](odoo%2016%20módulos/25_ausencias.png)

El módulo permite:
- Solicitud y aprobación de ausencias
- Control de saldos de vacaciones
- Registro de permisos médicos
- Ausencias no remuneradas
- Calendario de ausencias por departamento
- Afectación automática en nómina
## 10. PROCESOS SRI

### 10.1. Menú SRI

Acceso centralizado a todas las funciones relacionadas con el Servicio de Rentas Internas:

![Menu SRI](odoo%2016%20módulos/80_menu%20sri.png)

El menú SRI agrupa todas las funcionalidades fiscales específicas para Ecuador:
- Documentos electrónicos
- Retenciones
- ATS (Anexo Transaccional Simplificado)
- Reportes tributarios
- Validaciones de cumplimiento fiscal

### 10.2. Carga de Documentos Electrónicos

Importación de documentos electrónicos recibidos:

![Carga de documentos electrónicos](odoo%2016%20módulos/81_carga%20de%20documentos%20electronicos.png)

Esta funcionalidad permite:
- Importar XML de documentos recibidos
- Validación de estructura y firma
- Creación automática de registros en el sistema
- Conciliación con proveedores existentes
- Verificación con el servicio web del SRI

### 10.3. XML Enviados al SRI

Seguimiento de documentos electrónicos enviados:

![XML enviados al SRI](odoo%2016%20módulos/82_xml%20enviados%20al%20sri.png)

Detalle de XML enviado:

![XML enviados al SRI detalle](odoo%2016%20módulos/83_xml%20enviados%20al%20sri%20detalle.png)

El sistema permite:
- Monitoreo de estado de documentos enviados
- Reenvío en caso de errores
- Consulta de autorización
- Acceso al XML y RIDE de cada documento
- Historial de comunicaciones con el SRI

### 10.4. Retenciones de Compra

Gestión de retenciones emitidas a proveedores:

![Retenciones de compra](odoo%2016%20módulos/84_retenciones%20de%20compra.png)

Detalle de retención:

![Retenciones de compra detalle](odoo%2016%20módulos/85_retenciones%20de%20compra%20detalle.png)

Vista detallada de retenciones:

![Detalle de retenciones de compra](odoo%2016%20módulos/86_detalle%20de%20retenciones%20de%20compra.png)

Detalle adicional:

![Detalle detalle retenciones de compra](odoo%2016%20módulos/87_detalle%20detalle%20retenciondes%20de%20compra.png)

El proceso de retenciones de compra incluye:
- Creación manual o automática desde factura
- Selección de porcentajes según normativa vigente
- Emisión del comprobante electrónico
- Envío al proveedor
- Registro contable de valores retenidos
- Informes para declaraciones fiscales

### 10.5. Retenciones de Venta

Gestión de retenciones recibidas de clientes:

![Retenciones de ventas](odoo%2016%20módulos/88_retenciones%20den%20ventas.png)

Detalle de retención:

![Detalle retención en venta](odoo%2016%20módulos/89_detalle%20retencion%20en%20venta.png)

Vista detallada de retenciones:

![Detalle de retención en ventas](odoo%2016%20módulos/90_detalle%20de%20retencion%20en%20ventas.png)

Detalle adicional:

![Detalle detalle retención en ventas](odoo%2016%20módulos/91_detalle%20detalle%20retencion%20en%20ventas.png)

Las retenciones de venta permiten:
- Registro manual o carga desde XML
- Validación contra factura emitida
- Aplicación al saldo pendiente del cliente
- Contabilización automática
- Inclusión en reportes fiscales

### 10.6. Anexo Transaccional Simplificado (ATS)

Generación del ATS para presentación al SRI:

![ATS](odoo%2016%20módulos/92_ats.png)

El módulo ATS permite:
- Generación automática del archivo XML
- Validación previa de información
- Inclusión de compras, ventas y retenciones
- Corrección de inconsistencias
- Exportación para carga en sistema DIMM del SRI

---

## 11. CAJAS CHICAS

### 11.1. Configuración de Cajas Chicas

Gestión de fondos de caja chica:

![Cajas chicas menu](odoo%2016%20módulos/93_cajas%20chicas%20menu.png)

Detalle de caja chica:

![Caja chica detalle](odoo%2016%20módulos/94_caja%20chica%20detalle.png)

La configuración de cajas chicas incluye:
- Creación de fondos con monto asignado
- Asignación de responsable
- Definición de límites de gasto
- Categorías de gastos permitidos
- Proceso de aprobación de gastos
- Flujo de reposición

### 11.2. Reposiciones de Caja Chica

Proceso de reposición de fondos gastados:

![Reposiciones caja chica](odoo%2016%20módulos/95_reposiciones%20caja%20chica.png)

Detalle de reposición:

![Reposiciones caja chica detalle](odoo%2016%20módulos/96_reposiciones%20caja%20chica%20detalle.png)

El proceso de reposición incluye:
- Registro de gastos con comprobantes
- Aprobación por niveles de autorización
- Generación de solicitud de reposición
- Emisión de pago
- Contabilización por categorías de gasto
- Actualización del saldo disponible

---

## 12. REPORTES FINANCIEROS

### 12.1. Menús de Informes

Acceso a reportes financieros y fiscales:

![Informe menu](odoo%2016%20módulos/97_informe%20menu.png)

Menú adicional:

![Informe menu 2](odoo%2016%20módulos/98_informe%20menu%202.png)

Los reportes están organizados por categorías:
- Contables
- Financieros
- Fiscales
- Gerenciales
- Operativos

### 12.2. Balance de Situación

Estado de situación financiera:

![Balance de situación](odoo%2016%20módulos/99_balance%20de%20situacion.png)

El balance permite:
- Visualización a diferentes niveles de detalle
- Comparación entre períodos
- Exportación a diversos formatos
- Filtros por diarios, cuentas y dimensiones analíticas
- Personalización de plantillas de presentación

### 12.3. Estado de Pérdidas y Ganancias

Estado de resultados:

![Pérdidas y ganancias](odoo%2016%20módulos/100_perdidas%20y%20ganancias.png)

El reporte ofrece:
- Detalle de ingresos y gastos
- Cálculo de utilidad bruta, operacional y neta
- Comparación con presupuesto y período anterior
- Análisis de variaciones
- Exportación para presentación a organismos oficiales

### 12.4. Estado de Flujos de Efectivo

Reporte de movimientos de efectivo:

![Estado de flujos de efectivo](odoo%2016%20módulos/101_estadi%20de%20flujos%20de%20efectivo.png)

El estado de flujos permite analizar:
- Flujos de actividades operativas
- Flujos de inversión
- Flujos de financiamiento
- Variación neta de efectivo
- Conciliación con saldos contables

### 12.5. Resumen Ejecutivo

Indicadores clave para toma de decisiones:

![Resumen ejecutivo](odoo%2016%20módulos/102_resumen%20ejecutivo.png)

El resumen incluye:
- Indicadores financieros clave
- Gráficos de tendencias
- Comparativas
- Alertas sobre desviaciones
- Información consolidada para gerencia

### 12.6. Informes de Impuestos

Reportes para cumplimiento tributario:

![Informe impuestos](odoo%2016%20módulos/103_informe%20impuestos.png)

Los informes de impuestos incluyen:
- Detalle de IVA en ventas y compras
- Retenciones efectuadas y recibidas
- Base para declaraciones de impuestos
- Información para anexos fiscales
- Validación de consistencia de datos

### 12.7. Libro Mayor

Detalle de movimientos por cuenta:

![Libro mayor 1](odoo%2016%20módulos/104_libro%20mayor%201.png)

![Libro mayor 2](odoo%2016%20módulos/105_libro%20mayor%202.png)

El libro mayor ofrece:
- Movimientos detallados por cuenta
- Saldos iniciales y finales
- Filtros por período y diario
- Trazabilidad de operaciones
- Formato oficial para presentación a entidades reguladoras

### 12.8. Balance General

Vista alternativa del estado de situación:

![Balance general](odoo%2016%20módulos/106_balance%20general.png)

### 12.9. Journal Report

Informe de diarios contables:

![Journal report 1](odoo%2016%20módulos/107_journal%20report1.png)

![Journal report 2](odoo%2016%20módulos/108_journal%20report2.png)

El reporte de diarios permite:
- Revisión de asientos por diario
- Verificación de cuadre de asientos
- Auditoría de registros
- Detección de inconsistencias
- Exportación para respaldo

### 12.10. Libro Mayor de Empresa

Reporte de mayor general:

![Libro mayor de empresa](odoo%2016%20módulos/109_libro%20mayor%20de%20empresa.png)

![Libro mayor de empresa 1](odoo%2016%20módulos/110_libro%20mayor%20de%20empresa%201.png)

### 12.11. Reportes de Cartera

Análisis de cuentas por cobrar vencidas:

![Vencido por cobrar](odoo%2016%20módulos/111_vencido%20por%20cobrar.png)

Análisis de cuentas por pagar vencidas:

![Vencido por pagar](odoo%2016%20módulos/112_vencido%20por%20pagar.png)

![Vencido por pagar 1](odoo%2016%20módulos/113_vencido%20por%20pagar%201.png)

Los reportes de cartera permiten:
- Clasificación por antigüedad de saldos
- Detalle por cliente o proveedor
- Proyección de pagos y cobros
- Alertas sobre vencimientos críticos
- Información para gestión de cobranza

### 12.12. Análisis de Facturas

Reporte analítico de facturación:

![Análisis de facturas](odoo%2016%20módulos/114_analisis%20de%20facturas.png)

El análisis incluye:
- Tendencias de ventas
- Facturación por producto, categoría o cliente
- Comparativas con períodos anteriores
- Margen de contribución
- Efectividad de descuentos

### 12.13. Reporte de Conciliación Bancaria

Informe de estado de conciliación:

![Reporte conciliación bancaria](odoo%2016%20módulos/115_reporte%20conciliacion%20bancaria.png)

### 12.14. Programa de Depreciación

Reporte de depreciación de activos:

![Programa de depreciación](odoo%2016%20módulos/116_programa%20de%20depreciacion.png)

El programa muestra:
- Plan completo de depreciación por activo
- Valor residual y valor en libros
- Depreciación mensual y acumulada
- Impacto fiscal
- Proyección hasta el fin de la vida útil

### 12.15. Reportes de Información Fiscal

Reportes para declaraciones y anexos:

![Reporte información de compras](odoo%2016%20módulos/117_reporte%20información%20de%20compras.png)

![Reporte información de ventas](odoo%2016%20módulos/118_reporte%20informacion%20de%20ventas.png)

![Reporte códigos de impuestos](odoo%2016%20módulos/119_reporte%20codigos%20de%20impuestos.png)

![Reporte información de compras](odoo%2016%20módulos/120_reporte%20informacin%20de%20compras.png)

![Reporte información de ventas1](odoo%2016%20módulos/121_reporte%20informacion%20de%20ventas1.png)

### 12.16. Reportes de Cuentas por Cobrar y Pagar

Informes detallados de cartera:

![Reporte cuentas por cobrar](odoo%2016%20módulos/122_reporte%20cuentas%20por%20cobrar.png)

![Reporte cuentas por pagar](odoo%2016%20módulos/123_reporte%20cuentas%20por%20pagar.png)

### 12.17. Reporte de Pagos a Proveedores

Detalle de pagos realizados:

![Reporte de pagos a proveedores](odoo%2016%20módulos/124_reporte%20de%20pagos%20a%20proveedores.png)

### 12.18. Libro Mayor por Cuenta

Movimientos detallados por cuenta contable:

![Libro mayor por cuenta](odoo%2016%20módulos/125_lobro%20mayor%20por%20cuenta.png)

### 12.19. Reportes Gerenciales

Informes específicos para gerencia:

![Reporte de cuentas por cobrar gerencia](odoo%2016%20módulos/126_reporte%20de%20cuentas%20por%20cobrar%20gerencia.png)

![Reporte de cuentas por pagar gerencia](odoo%2016%20módulos/127_reporte%20de%20cuentas%20po%20pagar%20gerencia.png)

### 12.20. Reportes Financieros Ecuador

Reportes adaptados a requisitos locales:

![Reportes financieros Ecuador](odoo%2016%20módulos/128_reportes%20financieros%20ecuador.png)

![Reportes financieros Ecuador1](odoo%2016%20módulos/129_reportes%20financieros%20ecuador1.png)

### 12.21. Estado de Cuenta Cliente

Reporte detallado de movimientos por cliente:

![Estado de cuenta cliente](odoo%2016%20módulos/130_estado%20de%20cuenta%20cliente.png)

---

## 13. GLOSARIO

**ATS**: Anexo Transaccional Simplificado. Reporte mensual obligatorio que se presenta al SRI con el detalle de transacciones de compra, venta y retenciones.

**Comprobante Electrónico**: Documento fiscal (factura, retención, nota de crédito, etc.) emitido en formato XML con firma electrónica y validado por el SRI.

**Factura Electrónica**: Documento tributario emitido electrónicamente que cumple con los requisitos establecidos por el SRI para respaldar la transferencia de bienes o la prestación de servicios.

**IESS**: Instituto Ecuatoriano de Seguridad Social. Entidad responsable de la seguridad social en Ecuador.

**Liquidación de Compra**: Documento autorizado para respaldar la adquisición de bienes o servicios a personas naturales no obligadas a llevar contabilidad o que no disponen de RUC.

**Nota de Crédito**: Documento que se emite para anular operaciones, aceptar devoluciones y conceder descuentos o bonificaciones.

**RIDE**: Representación Impresa del Documento Electrónico. Versión imprimible del comprobante electrónico.

**RUC**: Registro Único de Contribuyentes. Identificación tributaria para personas naturales y jurídicas en Ecuador.

**SRI**: Servicio de Rentas Internas. Organismo fiscal encargado de la recaudación de impuestos en Ecuador.

**XML**: Formato estándar para documentos electrónicos utilizados en la facturación electrónica en Ecuador.
