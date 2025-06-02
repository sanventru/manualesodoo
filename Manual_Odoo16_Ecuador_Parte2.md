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
