# MANUAL DE USUARIO: SISTEMA ODOO 16 COMMUNITY ADAPTADO A LA LEGISLACIÓN ECUATORIANA

**Versión 1.1**  
**Junio 2025**

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

3. **FUNCIONALIDADES ESTÁNDAR**
   3.1. Interfaz de Usuario
   3.2. Búsqueda y Filtrado
   3.3. Vistas y Personalización
   3.4. Importación y Exportación
   3.5. Comunicación y Notificaciones
   3.6. Ajustes del Sistema

4. **VENTAS**  
   4.1. Menú de Ventas  
   4.2. Creación de Cotizaciones  
   4.3. Gestión de Pedidos  
   4.4. Configuración de Ventas
   4.5. Integración con CRM

5. **CRM**
   5.1. Pipeline de Ventas
   5.2. Gestión de Leads y Oportunidades
   5.3. Seguimiento de Actividades
   5.4. Cierre y Conversión a Ventas

6. **COMPRAS**  
   6.1. Requisiciones de Compra  
   6.2. Solicitudes de Presupuesto  
   6.3. Órdenes de Compra  
   6.4. Recepción de Productos
   6.5. Automatización de Reabastecimiento

7. **INVENTARIO**  
   7.1. Gestión de Productos  
   7.2. Almacenes y Ubicaciones
   7.3. Operaciones de Inventario  
   7.4. Kardex de Productos
   7.5. Trazabilidad y Control de Lotes

8. **FABRICACIÓN**
   8.1. Listas de Materiales
   8.2. Órdenes de Fabricación
   8.3. Planificación de Producción
   8.4. Control de Calidad

9. **PROYECTOS**
   9.1. Gestión de Proyectos
   9.2. Tareas y Subtareas
   9.3. Seguimiento de Tiempo
   9.4. Colaboración en Equipo

10. **CONTACTOS**
    10.1. Gestión de Contactos
    10.2. Categorización y Etiquetas
    10.3. Integración con Otras Aplicaciones

11. **EMPLEADOS**
    11.1. Gestión de Empleados
    11.2. Estructura Organizativa
    11.3. Contratos
    11.4. Nómina
    11.5. Gestión de Ausencias

12. **FACTURACIÓN**  
    12.1. Facturas de Clientes  
    12.2. Notas de Crédito  
    12.3. Reembolsos  
    12.4. Gestión de Pagos  
    12.5. Facturas de Proveedores  
    12.6. Liquidaciones de Compra  
    12.7. Recibos de Proveedores  
    12.8. Gastos de Empleados

13. **CONTABILIDAD**  
    13.1. Asientos Contables  
    13.2. Apuntes Contables  
    13.3. Apuntes Analíticos  
    13.4. Presupuestos  
    13.5. Conciliación Bancaria  
    13.6. Histórico de Movimientos  
    13.7. Chequeras y Gestión de Cheques

14. **ACTIVOS**  
    14.1. Gestión de Activos  
    14.2. Depreciaciones  
    14.3. Gastos Diferidos

15. **PROCESOS SRI**  
    15.1. Carga de Documentos Electrónicos  
    15.2. XML Enviados al SRI  
    15.3. Retenciones de Compra  
    15.4. Retenciones de Venta  
    15.5. Anexo Transaccional Simplificado (ATS)

16. **CAJAS CHICAS**  
    16.1. Configuración de Cajas Chicas  
    16.2. Reposiciones de Caja Chica

17. **REPORTES FINANCIEROS**  
    17.1. Balance de Situación  
    17.2. Estado de Pérdidas y Ganancias  
    17.3. Estado de Flujos de Efectivo  
    17.4. Resumen Ejecutivo  
    17.5. Informes de Impuestos  
    17.6. Libro Mayor  
    17.7. Reportes por Cobrar/Pagar  
    17.8. Reportes Financieros Ecuador  
    17.9. Estados de Cuenta Cliente

18. **GLOSARIO**

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

Odoo es un ERP modular de código abierto que integra todas las áreas de una empresa en una única plataforma. La versión Community de Odoo 16 es gratuita y de código abierto, ofreciendo amplias funcionalidades empresariales sin costo de licenciamiento (aunque con algunas características avanzadas reservadas para la edición Enterprise).

Para acceder al sistema:
1. **Acceder a la pantalla de login**: Navegue a la URL de su instancia de Odoo 16 (por ejemplo, https://<su_dominio>/web/login). Allí verá el formulario de inicio de sesión.
2. **Ingresar credenciales**: Escriba su dirección de correo electrónico de usuario y la contraseña en los campos correspondientes. Si su empresa ha habilitado autenticación de dos factores, deberá proporcionar el código de verificación generado en su aplicación autenticadora.
3. **Iniciar sesión**: Haga clic en el botón "Iniciar sesión". Si las credenciales son correctas (y se pasa la verificación de dos pasos en caso de estar activa), el sistema lo autenticará.

Una vez autenticado, accederá a la bandeja principal del sistema.

![Bandeja principal](odoo%2016%20módulos/2_bandeja.png)

Tras un login exitoso, Odoo muestra el tablero principal o menú de aplicaciones. Desde allí podrá ver los iconos de los módulos disponibles y acceder a ellos según sus permisos de usuario. Cada icono representa un módulo (Ventas, Inventario, Contabilidad, etc.). Al hacer clic en uno, ingresará a la aplicación correspondiente.

![Menús](odoo%2016%20módulos/3_menús.png)

La interfaz de Odoo 16 se caracteriza por su facilidad de uso e integración total de las aplicaciones. En la parte superior encontrará la barra de búsqueda universal y accesos rápidos, y en cada módulo podrá navegar mediante menús desplegables a las distintas funciones.

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

### Información ampliada

En Odoo 16 Community existen ciertas funciones transversales y opciones de configuración generales que conviene conocer, ya que están disponibles en prácticamente todos los módulos. Estas características estándar facilitan la navegación, la personalización básica y la adaptación del sistema a las necesidades de la empresa. A continuación, se describen las más importantes:
Búsqueda y filtrado: En la parte superior de cada vista de listado, Odoo ofrece una barra de búsqueda potente para localizar registros rápidamente. Puede usarse para buscar por cualquier campo específico y aplicar filtros sobre la marcha. “Puede usar el campo de búsqueda para buscar valores específicos con rapidez y agregarlos como filtro.”
. Al escribir texto, el sistema sugiere campos sobre los cuales filtrar; por ejemplo, en una lista de contactos, escribir “San Francisco” y elegir Ciudad filtrará todos los contactos en esa ciudad. Además, están disponibles los menús desplegables de Filtros, Agrupar y Favoritos: con Filtros se pueden añadir condiciones personalizadas (ej. Agregar filtro personalizado: campo = Estado, valor = Borrador)
; con Agrupar se agrupan registros por categorías (p.ej. por Vendedor, por Etiqueta); y Favoritos permite guardar búsquedas frecuentes para reutilizarlas. Esta funcionalidad estándar de búsqueda y filtrado agiliza enormemente la localización de información en bases de datos extensas y es uniforme en todos los módulos (ventas, inventario, etc.).
Importación y exportación de datos: Odoo 16 Community permite exportar listas de datos a formatos como CSV o Excel, y también importar datos en masa desde archivos, lo cual es muy útil durante la carga inicial de información o para actualizaciones masivas. Por ejemplo, es posible exportar la lista completa de productos con sus campos, editar precios en Excel, y reimportar para actualizar. Al exportar, el usuario escoge qué campos incluir; al importar, Odoo proporciona plantillas y validaciones para asegurar la correcta carga de datos
. “En la herramienta de importación se proporcionan las plantillas para importar los datos más comunes (contactos, productos, estados de cuenta bancarios, etc.). Puede abrirlas con cualquier software de hojas de cálculo...”
. Es importante mapear correctamente las columnas del archivo con los campos de Odoo. La importación masiva agiliza la migración desde otros sistemas o la creación de registros de forma rápida (por ejemplo, cargar 500 contactos nuevos desde un CSV en lugar de uno por uno). Esta función estándar se accede mediante el botón Importar o Exportar que aparece en las vistas de listado, al lado de Crear, y está sujeto a permisos (normalmente solo administradores o usuarios con permiso pueden importar para evitar errores).
Informes y vistas personalizables: En todos los módulos, Odoo ofrece múltiples vistas de los datos: lista, kanban, formulario, calendario, gráfico y pivote, cuando aplican. Por ejemplo, en Facturación puede ver las facturas en formato de lista o también un gráfico de barras por estado (borrador, pagado, vencido). La vista pivote permite generar tablas dinámicas directamente en Odoo, sobre cualquier dato (útil para análisis ad-hoc sin exportar a Excel). Además, al abrir un registro, existe el botón Imprimir que genera informes en PDF con plantillas prediseñadas (facturas, pedidos, albaranes, etc.). Estos reportes pueden adaptarse mediante personalización (requiere estudio técnico o usar Odoo Studio en Enterprise). En Community, también está disponible la opción de Acciones en lote, que permite seleccionar varios registros y realizar acciones masivas (ej. validar múltiples facturas a la vez, borrar varios contactos, etc., según permisos). Finalmente, la interfaz soporta ciertas personalizaciones como agregar campos personalizados (vía modo desarrollador) o reordenar columnas en la vista list (arrastrando títulos) para cada usuario.
Actividades programadas: Odoo cuenta con un sistema integrado de actividades para seguimiento de tareas pendientes. En cualquier modelo (una oportunidad de CRM, una tarea de proyecto, una factura, etc.) se puede programar una actividad futura: llamada, correo, reunión, tarea pendiente, etc., asignada a un usuario y con fecha límite. Estas actividades aparecen en la barra lateral del registro y también en el menú general Actividades (icono de reloj en la barra superior), listando las actividades de hoy, retrasadas y próximas para el usuario. Por ejemplo, un vendedor puede tener una actividad “Llamar para seguimiento” en una oportunidad X el día Y. Cuando llega la fecha, Odoo le recordará en su panel de Actividades. “Para visualizar todas las actividades de todos los usuarios, quite el filtro Mi flujo de la barra de búsqueda.”
– es decir, un gerente podría ver actividades de su equipo. Marcar actividades como hechas o cancelarlas mantiene el flujo de trabajo ordenado. Este sistema estándar aumenta la productividad al no dejar pendientes olvidados en ningún proceso.
Ajustes generales del sistema: La aplicación Ajustes (o Configuración) es accesible solo por el Administrador o usuarios con permisos técnicos. Desde Ajustes se configuran parámetros globales como: datos de la Compañía (nombre, logo, dirección, moneda, lenguaje), gestión de Usuarios y sus permisos, activación o desactivación de módulos adicionales, configuración de Email (servidor de correo saliente y entrante para integraciones), traducciones y zonas horarias, entre otros. Muchos módulos tienen secciones de configuración específicas dentro de esta app. Por ejemplo, bajo Ajustes > Ventas, se pueden habilitar opciones como Firma electrónica en cotizaciones, Múltiples unidades de medida, etc. Cualquier opción marcada aquí afecta el comportamiento de la aplicación correspondiente. Cabe destacar que algunos ajustes avanzados están ocultos hasta activar el modo desarrollador (lo cual en Odoo Community se logra añadiendo ?debug=1 en la URL, o a través del menú de desarrollador). En general, Ajustes le permite “gestionar la configuración de su proyecto”
en Odoo: es donde se realizan las parametrizaciones iniciales después de la instalación y donde se administran las funcionalidades transversales del sistema.

- Configuración de conexión con servicios web del SRI

### Instrucciones detalladas

**Configuración esencial antes de empezar a operar:**

1. **Definir datos de la compañía**  
   *Ajustes → Compañías → Editar*: ingrese razón social, RUC, régimen de contabilidad y logo corporativo.

2. **Zona horaria e idioma**  
   *Ajustes → Preferencias de usuario*: seleccione *America/Guayaquil* y «Español (Ecuador)».

3. **Moneda principal y secundarias**  
   *Ajustes → Moneda*: active USD y configure su cotización automática (Diario → Tipo de cambio del BCE).

4. **Plan de cuentas ecuatoriano**  
   *Contabilidad → Configuración → Plan contable*: instale el plan PYMES NIIF o utilice el plan personalizable SRI.

5. **Impuestos de IVA**  
   Cree los impuestos 12 %, 0 %, 8 % (Impuesto ICE) y 15 % (IVA servicios), marcando su tipo SRI correspondiente.

6. **Usuarios y perfiles de acceso**  
   Cree grupos (Administrador, Contador, Vendedor) y asigne permisos según la política de *Seguridad basada en registros*.

7. **Secuencias de documentos electrónicos**  
   *Contabilidad → Configuración → Documentos electrónicos*: defina los establecimientos y secuenciales autorizados por el SRI.

> **Tip:** active el *Modo desarrollador* (`?debug=1`) para ver todos los parámetros avanzados y campos técnicos.

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

### Información ampliada

Figura 1: Vista principal del módulo de Ventas en Odoo 16, mostrando el tablero de cotizaciones y clientes. La aplicación Ventas de Odoo permite gestionar todo el proceso comercial, desde la oferta hasta el pedido confirmado y la factura. En palabras de la documentación oficial: “La aplicación Ventas de Odoo es la que ejecuta su proceso de ventas (desde la cotización hasta la orden de venta) y entrega y factura lo que se vendió.”
. En Odoo 16 Community, el módulo de Ventas incluye herramientas para crear cotizaciones, enviarlas a clientes, confirmar pedidos, administrar entregas y generar facturas de venta de forma integrada. Creación de cotizaciones: Para crear una nueva cotización de venta, navegue al menú Ventas > Pedidos > Cotizaciones y haga clic en el botón Nuevo. Se abrirá el formulario de cotización donde podrá seleccionar el cliente, productos, precios y condiciones de pago. “Para crear una cotización, abra Ventas y haga clic en el botón Nuevo ubicado en la esquina superior izquierda de la página del tablero principal de cotizaciones.”
. En el formulario, es obligatorio indicar el Cliente y agregar al menos un producto con su cantidad y precio. Odoo completará automáticamente la dirección de facturación y entrega según los datos del contacto del cliente, y permitirá elegir plantillas de cotización predefinidas si existen
. Una vez ingresados todos los datos necesarios, puede guardar la cotización y enviarla por correo electrónico al cliente directamente desde Odoo (usando la función de Enviar por email). Confirmación del pedido: Cuando el cliente acepta la oferta, el siguiente paso es confirmar la cotización para convertirla en un pedido de venta. Al hacer clic en Confirmar, Odoo cambia el estado de la cotización a Orden de Venta. “Al confirmarlas, estas se convierten en órdenes de venta que pueden ser facturadas y pagadas.”
. En ese momento, si los productos vendidos son tipo stock, el sistema genera automáticamente una orden de entrega en el módulo de Inventario para preparar el envío al cliente. Asimismo, la orden de venta confirmada queda lista para ser facturada desde el módulo de Facturación/Contabilidad. (Si la empresa maneja pagos en línea, Odoo también permite solicitar pago al confirmar, integrando pasarelas de pago en la cotización). Finalmente, una vez entregados los productos y/o prestados los servicios, es posible crear la factura de cliente directamente desde la orden de venta. Odoo soporta facturación por cantidades entregadas o por cantidades pedidas según la configuración elegida
. Gestión de clientes y pipeline: El módulo de Ventas trabaja estrechamente con Contactos (para el registro de clientes) y con CRM (gestión de oportunidades). Los clientes potenciales captados se gestionan en CRM, y al calificarlos pueden convertirse en cotizaciones en Ventas. El tablero de Ventas muestra indicadores clave y es posible analizar el desempeño de ventas mediante informes y gráficos (por vendedor, por ingresos, por productos más vendidos, etc.). Además, Odoo permite configurar listas de precios y descuentos por cliente, definir distintas unidades de medida de venta, manejar variantes de producto, y otras funcionalidades avanzadas de ventas
. En resumen, Ventas es el módulo central para concretar ingresos: desde la primera oferta hasta el cobro, con un proceso integrado y automatizado dentro de Odoo 16.
CRM
El módulo CRM (Customer Relationship Management) se enfoca en la gestión del ciclo previo a la venta: seguimiento de leads (prospectos) y oportunidades comerciales, para convertirlos en clientes. Según la documentación de Odoo, “La aplicación CRM de Odoo le ayuda a organizar su actividad de ventas y le permite dar seguimiento a sus leads, cerrar oportunidades y obtener pronósticos precisos.”
. En Odoo 16 Community, CRM está totalmente integrado con Ventas, de modo que una oportunidad ganada puede convertirse en una cotización de forma directa. Pipeline de ventas: La interfaz principal de CRM es un tablero kanban que muestra las oportunidades clasificadas por etapas (por ejemplo: Nueva, Calificando, Propuesta, Ganada). Este pipeline visual permite arrastrar y soltar tarjetas de oportunidad a lo largo de las etapas, reflejando su avance. Cada oportunidad registra información como el cliente potencial, importe esperado, probabilidad de cierre, próximas actividades programadas, etc. Odoo ofrece herramientas para organizar el flujo de ventas, incluyendo la asignación de vendedores, segmentación por equipos de ventas, y automatización de actividades de seguimiento. Por ejemplo, es posible configurar recordatorios y próximas acciones mediante el sistema de actividades (llamadas, reuniones, correos) directamente enlazado a cada oportunidad. Leads y oportunidades: CRM permite manejar un ciclo de ventas corto o largo según las necesidades. Se pueden registrar leads (simples contactos o interesados) que luego se convierten en oportunidades calificadas. El sistema puede obtener leads de formularios del sitio web, campañas de marketing u otras fuentes, y asignarlos automáticamente a vendedores mediante reglas (por zona, sector, etc.). La información de los leads se enriquece en Odoo (incluso existe integración con servicios para obtener datos de empresa automáticamente). Una vez convertidos en oportunidad, se inicia el seguimiento activo: “Organice sus oportunidades con ayuda del flujo (pipeline) y gestione sus actividades diarias con reuniones y próximas actividades.”
. Cierre y conversión a ventas: Cuando una oportunidad se concreta (ganada), el usuario puede marcarla como Ganada en el pipeline de CRM. En ese punto, gracias a la integración, es posible crear directamente un presupuesto de venta (cotización) enlazado a esa oportunidad, saltando al módulo de Ventas con la información ya cargada del cliente potencial. Si la oportunidad no prospera, también es posible marcarla como Perdida indicando un motivo, lo que alimenta posteriormente informes de tasa de éxito y razones de pérdida para análisis comerciales
. El CRM de Odoo incluye además reportes para pronosticar ventas (forecast), análisis de pipeline por etapa, por vendedor, duración de ciclo de venta, etc., dando a la gerencia herramientas para un pronóstico preciso (“obtener pronósticos precisos”
) del desempeño comercial. En conjunto, CRM y Ventas cubren el ciclo completo de ventas: CRM gestiona la relación y la oportunidad antes del pedido, y Ventas gestiona la cotización, el pedido y la facturación una vez se cierra el trato. Esta integración garantiza un flujo continuo de información sin reingreso de datos, aumentando la eficiencia del proceso comercial en Odoo 16 Community.

### Instrucciones detalladas

**Ciclo de ventas estándar:**

1. **Crear cotización**  
   Ventas → Cotizaciones → *Nuevo* → seleccione el cliente, productos y condiciones de pago.

2. **Enviar cotización**  
   Pulse *Enviar por correo* para abrir la plantilla PDF y editar el mensaje. El envío queda registrado en el *Chatter*.

3. **Confirmar pedido de venta**  
   Botón *Confirmar* → se generan los documentos de entrega y un borrador de factura (según la política de facturación).

4. **Gestionar entrega**  
   Inventario → Transferencias → abra la operación, verifique cantidades y haga clic en *Validar* para descontar stock.

5. **Emitir factura**  
   Desde el pedido → *Crear factura* → revise impuestos, añada retenciones si aplica y valide el documento.

6. **Registrar pago**  
   En la factura → *Registrar pago* → seleccione el diario (Bancos, Efectivo) y confirme.

**Configuraciones clave del módulo:**

- Políticas de facturación: *Al ordenar* o *A la entrega*.  
- Incoterms y términos de pago.  
- Lista de precios por cliente o segmento.  
- Plantillas de cotización y firma electrónica.  
- Equipos de venta y comisiones por usuario.

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

### Información ampliada

La aplicación Compras de Odoo permite gestionar todo el proceso de adquisición de bienes y servicios a proveedores. Su función es mantener un control de las cotizaciones de proveedores, órdenes de compra y recepción de mercancías de la empresa. En palabras de la documentación: “La aplicación Compra de Odoo le ayuda a mantener un registro de todos los acuerdos de compra, cotizaciones y órdenes de compra que realice.”
. De este modo, Odoo Compras facilita desde la solicitud de cotización (RFQ) hasta la orden de compra confirmada, y su integración con Inventario para recepcionar productos, y con Facturación para las facturas de proveedor. Solicitudes de cotización y órdenes de compra: El flujo típico inicia creando una Solicitud de Cotización a uno o varios proveedores. Para ello, navegue a Compras > Pedidos > Solicitudes de presupuesto y cree un nuevo registro, indicando el proveedor, las líneas de productos a comprar, cantidades y precios esperados. Se puede enviar la solicitud al proveedor directamente por correo electrónico desde Odoo. Una vez recibido el presupuesto del proveedor y acordados los términos, simplemente se hace clic en Confirmar para convertir la solicitud en una Orden de Compra firme. Al confirmar la orden de compra, Odoo programa automáticamente una recepción en el módulo de Inventario, para que el almacén proceda a ingresar las mercancías cuando arriben. También se vuelve posible registrar la factura del proveedor correspondiente en el módulo de Facturación. Todo este proceso queda registrado y vinculado: la orden de compra enlaza a sus recepciones en almacén y a las facturas de proveedor, brindando una trazabilidad completa. Automatización de reabastecimiento: Odoo 16 Community incorpora funcionalidades para optimizar las compras recurrentes. Una de ellas son las reglas de reorden (reabastecimiento automático). Estas reglas permiten definir un punto de pedido mínimo en el inventario de cada producto, de modo que cuando el stock disponible cae por debajo del mínimo, Odoo genere automáticamente una orden de compra (o una solicitud) al proveedor designado para reponer existencias
. Esto ayuda a evitar quiebres de stock y asegura el abastecimiento continuo. Adicionalmente, el sistema soporta pedidos abiertos y contratos de compra (compras programadas con un proveedor a lo largo del tiempo)
, así como la gestión de múltiples cotizaciones a diferentes proveedores para un mismo requerimiento, pudiendo comparar precios y elegir la mejor oferta. Recepciones y control de calidad: Tras confirmar una compra, la integración con Inventario se encarga de la recepción. Los encargados de almacén verán un albarán de entrada pendiente por la cantidad ordenada. Cuando el proveedor entrega los productos, el usuario de inventario procede a validar la recepción registrando las cantidades recibidas. Odoo permite manejar cantidades recibidas parciales, backorders (pedidos pendientes), e incluso flujo de aprobaciones o controles de calidad si se configuran (por ejemplo, inspeccionar productos al recibir). Solo después de recibir físicamente, se suele procesar la factura del proveedor (según política: Odoo puede manejar facturación al pedir o al recibir mercancía
). En resumen, el módulo Compras de Odoo 16 Community brinda un control completo sobre el ciclo de abastecimiento de la empresa, integrándose con Inventario y Contabilidad. Desde la negociación con proveedores hasta la entrada de stock y pago de facturas, todo el proceso queda centralizado: “Aprenda cómo monitorear una licitación de compra, automatizar el reabastecimiento y darle seguimiento a sus órdenes.”
. Esto mejora la eficiencia en compras y la visibilidad de las obligaciones con proveedores en la organización.

### Instrucciones detalladas

**Flujo de abastecimiento:**

1. **Solicitud interna**  
   Compras → *Solicitudes de aprovisionamiento* → *Nuevo* → defina producto y cantidad.

2. **Solicitud de cotización (RFQ)**  
   Para proveedores externos: *RFQ* → envíe por email o imprima PDF.

3. **Confirmar orden de compra**  
   Botón *Confirmar* crea el *Pedido de compra* y planifica la recepción.

4. **Recepción de productos**  
   Inventario → Transferencias → seleccione la operación, ingrese cantidades recibidas, *Validar*.

5. **Recepción de factura de proveedor**  
   En la orden → *Crear factura* → verifique precios, impuestos (IVA 12 %, retención) y valide.

6. **Pagos**  
   Contabilidad → Pagos → *Registrar pago* para conciliar la factura.

**Ajustes importantes:**

- Rutas de reabastecimiento (Make to Order, Dropshipping).  
- Niveles de aprobación por monto.  
- Descuentos por proveedor y condiciones de pago.  
- Integración con Inventario para controlar existencias.

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

### Información ampliada

El módulo Inventario de Odoo es una poderosa herramienta de gestión de almacenes y existencias, encargada de registrar todos los movimientos de productos dentro de la empresa. Su alcance abarca recepciones de proveedor, entregas a clientes, transferencias internas, ajustes de inventario, control de ubicaciones y más. Tal como indica la documentación: “La aplicación Inventario de Odoo es tanto una aplicación de inventario como un sistema de gestión de inventario. La aplicación permite a los usuarios gestionar los tiempos de espera, automatizar el reabastecimiento, configurar rutas avanzadas y mucho más.”
. Es decir, incluye funcionalidades básicas de almacén y también opciones avanzadas (multi-almacén, reglas automáticas, etc.) típicas de un WMS (Warehouse Management System). Almacenes y ubicaciones: En Odoo, un Almacén representa una instalación física o depósito de la empresa, y dentro de cada almacén se pueden definir múltiples Ubicaciones específicas (estantes, secciones, sub-almacenes) para mayor detalle. “En la aplicación Inventario de Odoo, los almacenes se encargan de gestionar y distribuir los productos entre distintas áreas físicas, mientras que las ubicaciones proporcionan un desglose más detallado dentro de cada almacén para gestionar los artículos con mayor eficiencia.”
. Cada movimiento de inventario en Odoo ocurre entre dos ubicaciones (origen y destino). Por ejemplo, una Recepción desde proveedor mueve stock de la ubicación virtual Proveedor al almacén físico de la empresa; una Entrega a cliente mueve stock del almacén a la ubicación virtual Clientes (salida); una Transferencia interna mueve stock entre dos ubicaciones internas de la compañía. Esta estructura flexible permite reflejar con exactitud la organización real del inventario. Operaciones de inventario: Las operaciones principales gestionadas por el módulo incluyen:
Recepciones de mercancía (entradas de compra o devoluciones de clientes).
Entregas o despachos (salidas por ventas o envíos al cliente).
Transferencias internas (movimientos entre almacenes o ubicaciones internas).
Ajustes de inventario (recuentos físicos para corregir las cantidades en sistema).
Odoo 16 Community brinda una interfaz clara para manejar estas operaciones. Por ejemplo, al recibir productos de una orden de compra confirmada, se genera un documento de Recepción correspondiente. El usuario de almacén puede validar la entrada indicando las cantidades efectivamente recibidas (soportando también series, lotes o fechas de caducidad si aplican al producto). Del mismo modo, las Entregas vinculadas a órdenes de venta aparecen listadas para su preparación y validación, incluyendo la posibilidad de imprimir albaranes o etiquetas si se requieren. Las transferencias internas permiten reubicar stock entre almacenes (Odoo soporta reglas push/pull y rutas predefinidas para automatizar movimientos internos, por ejemplo abastecimiento de una tienda desde un almacén central). Los ajustes de inventario se realizan iniciando un conteo (Odoo crea un inventario físico donde el usuario ingresa el conteo real de cierto conjunto de productos/ubicaciones), y al validar, el sistema ajusta las diferencias automáticamente. Otras funciones avanzadas: Inventario en Odoo 16 Community también incluye funcionalidades como: gestión de lotes y números de serie (para trazabilidad detallada de productos individuales
), manejo de paquetes y embalajes, definiciones de rutas de almacenamiento (por ejemplo drop-shipping, cross-docking, manufactura, etc.), y soporte de múltiples unidades de medida con conversiones automáticas. Los informes de inventario permiten valorar el stock (usando métodos FIFO, costo promedio, etc.), conocer cantidades disponibles vs reservadas, rotación de productos, entre otros datos importantes. Cabe mencionar que, al ser Community, algunas características como el uso de códigos de barras mediante la app móvil o ciertos automatismos pueden estar limitados, pero los procesos esenciales de inventario están completamente cubiertos. En síntesis, el módulo Inventario garantiza un control riguroso de las existencias. Todas las transacciones quedan documentadas y enlazadas: por ejemplo, desde un pedido de venta se puede saltar a la entrega en almacén y de allí a la firma de recepción del cliente. Gracias a esta trazabilidad integral y a las opciones de automatización, Odoo 16 Community permite optimizar la gestión de stock, reducir errores y tener en todo momento visibilidad sobre qué hay en inventario, dónde está y en qué estado se encuentra.
Fabricación
El módulo Fabricación (Manufacturing) de Odoo está dirigido a empresas manufactureras para planificar, programar y controlar sus órdenes de producción. Permite definir las Listas de materiales (BOM) de cada producto, lanzar Órdenes de Fabricación, gestionar órdenes de trabajo en el taller, y hacer seguimiento del proceso productivo de principio a fin. Según la documentación oficial: “La aplicación Fabricación de Odoo le ayuda a los fabricantes a programar, planificar y procesar las órdenes de fabricación.”
. En Odoo 16 Community, Manufacturing incluye funcionalidades robustas de MRP, aunque algunas avanzadas (como uso de Centro de Trabajo con tabletas IoT) son parte de la edición Enterprise. Aún así, la Community permite llevar un control eficaz de producción para pymes industriales. Listas de materiales y planificación: En primer lugar, para cada producto manufacturado se define su Lista de Materiales (LdM), que especifica los componentes requeridos y, opcionalmente, las operaciones a realizar. Una LdM puede incluir materia prima, mano de obra y también sub-ensambles (productos que a su vez se fabrican a partir de otras LdM). Con las LdM configuradas, cuando se necesita producir un artículo (por ventas o para stock), el usuario crea una Orden de Fabricación desde Fabricación > Operaciones > Órdenes de Fabricación, seleccionando el producto a fabricar y la cantidad. Odoo entonces enlistará automáticamente los componentes necesarios según la LdM. Es posible programar la orden para una fecha y, si se manejan centros de trabajo, asignarla a una línea o máquina específica. Ejecución de órdenes de fabricación: Al iniciar una orden de fabricación, el inventario de componentes se reserva para la producción. Si un componente está agotado, Odoo puede activar reglas de reabastecimiento (por ejemplo, generar automáticamente una orden de compra al proveedor o una fabricación de ese subcomponente, si así está configurado). Durante el proceso, el operario o responsable de producción puede marcar en Odoo el comienzo y fin de la fabricación, registrar consumos reales de material (si difieren de la LdM estándar), y reportar la cantidad producida y cualquier desecho. Cuando la orden está completa, se valida la producción, lo que descuenta los componentes del inventario y aumenta el stock del producto terminado. Todo queda documentado: Odoo genera un movimiento de stock de salida de materias primas y entrada del producto final en la ubicación designada (p. ej. almacén de productos terminados). Características adicionales: Odoo soporta diferentes estrategias de producción: fabricación para stock (make to stock) y fabricación bajo pedido (make to order). También permite manejar producciones multi-paso. Por ejemplo, puede configurar que la fabricación se haga en 3 etapas: Preparación -> Producción -> Control de Calidad, generando transferencias internas entre etapas de manera automática
. Aunque la interfaz IoT para alertas en planta es Enterprise, en Community igualmente se puede registrar tiempos de trabajo, pausar órdenes, y cargar incidencias manualmente. El módulo de Mantenimiento (Enterprise) y Calidad (Enterprise) se integran con Fabricación para reportar paros de máquina o controles de calidad durante la producción; en Community no están disponibles esos submódulos, pero sí se puede reflejar manualmente si un producto no pasó control mediante ajustes de inventario o notificaciones en notas. En conclusión, Fabricación en Odoo 16 Community brinda las funciones esenciales de un sistema MRP: estructura de producto, planificación de órdenes y control de stock en producción. “Coloque tabletas en el taller para controlar todas las órdenes de trabajo en tiempo real mediante el panel de control del centro de trabajo...” – si bien esta parte corresponde a Enterprise IoT
, la Community igualmente le permite a un fabricante conocer en tiempo real el estado de sus órdenes desde el sistema, con actualizaciones de cantidad producida, materiales consumidos y costo de producción (según el valor de componentes). Integrado con Ventas, Inventario y Compras, el módulo de Fabricación asegura que la cadena productiva esté coordinada con la demanda y el aprovisionamiento en Odoo.
Proyecto
El módulo Proyecto de Odoo se utiliza para planificar, organizar y hacer seguimiento a proyectos de la empresa, especialmente útil en industrias de servicios, desarrollo, consultoría, etc. Odoo permite crear proyectos, dividirlos en tareas, asignar responsables y fechas, y colaborar en su ejecución. La documentación define: “Proyecto de Odoo es una herramienta para gestionar sus proyectos activos. Planifique tareas, asigne actividades a sus compañeros de trabajo y manténgase al tanto del rendimiento de cada proyecto.”
. En Odoo 16 Community, el módulo de Proyectos proporciona las funcionalidades clave de gestión de tareas y tiempos, aunque funciones como hojas de horas avanzadas o pronósticos pueden estar limitadas en Community. Estructura de proyectos y tareas: Al ingresar al módulo Proyecto, se presenta un tablero con todos los proyectos en curso (cada uno representado como un tablero tipo kanban, o lista, según preferencia). Dentro de cada proyecto, las Tareas son el elemento principal. Cada tarea puede tener asignado un usuario responsable, fechas límite, etiquetas, subtareas, y registro de progreso. Por ejemplo, en un proyecto de desarrollo de software, podría haber tareas como “Diseño UI”, “Implementación módulo X”, “Pruebas QA”, etc. Odoo facilita la creación rápida de tareas y su asignación al personal. Además, las tareas pueden organizarse por etapas (ToDo, En Proceso, Hecho, por ejemplo) y arrastrarse visualmente de una etapa a otra, similar al funcionamiento del CRM pero orientado a flujo de trabajo interno. Colaboración y seguimiento: Dentro de cada tarea, existe un chat/log (Chatter) donde los participantes pueden agregar notas, adjuntar documentos, o incluso hacer menciones a compañeros (usando @) para consultas. Esto mantiene la comunicación del equipo centralizada en el contexto de la tarea misma. Es posible programar actividades (llamadas, reuniones, correos) ligadas a la tarea, lo que ayuda a recordar acciones pendientes o automatizar seguimientos. El módulo de Proyecto también se integra con el módulo Hojas de horas (Timesheets, disponible en Community) de manera que los empleados pueden registrar el tiempo trabajado en cada tarea. Esto es particularmente útil para proyectos facturables: Odoo puede acumular las horas registradas y, si se usa junto con el módulo de Facturación, generar facturas a clientes basadas en tiempo y materiales invertidos en un proyecto. Control y entrega: Los gerentes de proyecto pueden monitorear el avance a través de vistas de Tabla o Calendario, filtrando por asignado, por vencimiento, etc. Odoo ofrece informes como gráficos de burndown, o productividad por empleado, para analizar la eficiencia. Al finalizar un proyecto o una tarea, simplemente se marca como realizada. En caso de proyectos complejos, es posible crear subproyectos o vincular tareas dependientes. Sin embargo, la versión Community no incluye la característica de tareas dependientes tipo diagrama de Gantt interactivo (esa es Enterprise), pero sí se puede ver un Gantt básico de tareas. Para la mayoría de las pymes, la vista kanban o lista combinada con fechas y prioridades suele ser suficiente para gestionar eficazmente los proyectos. En resumen, el módulo Proyecto de Odoo 16 Community ofrece un entorno colaborativo para asegurar que los proyectos avanzan según lo planificado y que todos los miembros del equipo conocen sus tareas y plazos. La integración con otras apps (por ejemplo, poder facturar directamente las horas de proyecto al cliente, o enlazar un ticket de Helpdesk a un entregable de proyecto en Enterprise) amplía las posibilidades, pero incluso usando únicamente Community se puede cubrir el ciclo básico: “Planifique tareas, asigne actividades a sus compañeros de trabajo y manténgase al tanto del rendimiento de cada proyecto.”
. Esto mejora la transparencia y la eficiencia en la ejecución de proyectos internos y para clientes.
Contactos
El módulo Contactos es una aplicación fundamental (viene instalada por defecto en todas las bases de Odoo
) que sirve como directorio central de todas las personas y empresas con las que la organización se relaciona: clientes, proveedores, socios y también empleados. Un contacto en Odoo actúa como un registro maestro de información de una persona o entidad, incluyendo direcciones, teléfonos, correos, datos fiscales, etc. “Los contactos se crean para cada persona con la que usted trabaja a través de Odoo, como sus clientes. Un contacto es un repositorio de información empresarial indispensable que le permite comunicarse y facilitar las transacciones empresariales.”
. Creación y tipos de contacto: Para crear un nuevo contacto manualmente, basta ir a Contactos y pulsar Crear. Se abrirá un formulario donde seleccionar si es un Contacto Individual (persona) o una Empresa
.
Si es Empresa, el formulario pedirá el Nombre de la empresa y sus datos (dirección, teléfono, etc.).
Si es Individual, se pedirá el Nombre de la persona y aparecerá un campo opcional de “Empresa” para vincular este individuo a una empresa existente (por ejemplo, un empleado de una compañía cliente)
.
A continuación se completan los campos de dirección (país, estado, ciudad, calle), contactos adicionales (teléfono, móvil, email, sitio web), posición (cargo), identificaciones fiscales (por ejemplo RUC, CIF, NIF, según país)
, y cualquier otra nota relevante. Odoo permite también categorizar contactos usando etiquetas, lo cual es útil para segmentar (ejemplo: Proveedor, Cliente VIP, etc.)
. Relaciones y jerarquías: La app Contactos soporta múltiples direcciones y contactos asociados. En la pestaña Contactos y direcciones de una ficha de Empresa, se pueden añadir subcontactos que representan, por ejemplo, sucursales (direcciones adicionales) o personas de contacto dentro de esa empresa
. Un mismo individuo puede estar vinculado a una empresa (campo “Nombre de la empresa” en su ficha). Esto crea una jerarquía: verás en la ficha de la empresa listados los individuos asociados (ej. diferentes empleados de ese cliente corporativo). Además, las direcciones pueden clasificarse por tipo: Facturación, Envío, Contacto, Otro
, lo que permite a Odoo elegir automáticamente la dirección correcta en documentos de ventas o compras (por ejemplo usar la dirección de entrega del contacto cuando se genera una orden de entrega). Usos en otras aplicaciones: El módulo de Contactos sirve de base de datos para todo Odoo. Cuando en Ventas seleccionamos un cliente para una cotización, estamos eligiendo un registro de Contactos. Lo mismo ocurre al asignar un proveedor en una orden de compra, o un empleado en una hoja de horas. Por ello, mantener actualizada la información en Contactos es importante. Desde Contactos también se puede: otorgar acceso al portal a un contacto (por ejemplo, invitar a un cliente a que acceda a su portal de cliente para ver sus pedidos y facturas)
, registrar miembros (en caso de usar módulo de Membresías), entre otras acciones. En síntesis, Contactos funciona como una libreta de direcciones centralizada y compartida entre todos los módulos. Dado que viene instalada por defecto, es uno de los primeros lugares donde ingresaremos datos maestros (clientes, proveedores, etc.) al iniciar con Odoo 16. La interfaz es sencilla pero poderosa, permitiendo filtrar y buscar fácilmente contactos por cualquier criterio, y ampliable con campos personalizados si se requiere información adicional. Es la base para poder “comunicarse y facilitar las transacciones empresariales”
en todas las aplicaciones de Odoo.

### Instrucciones detalladas

**Operaciones principales:**

1. **Recepciones (Entradas)**  
   Inventario → Operaciones → Entradas → *Validar* llegada.

2. **Despachos (Salidas)**  
   Inventario → Operaciones → Salidas → *Validar* entrega.

3. **Transferencias internas**  
   Entre ubicaciones: *Nueva transferencia* → seleccione origen y destino.

4. **Recuentos cíclicos / Ajustes**  
   Inventario → Ajustes de inventario → *Nuevo* → ingrese conteo real → *Validar*.

5. **Trazabilidad**  
   Pestaña *Lotes/Números de serie* en el formulario de producto → seguimiento completo.

6. **Kardex**  
   Reporte de movimientos valorados para auditoría fiscal.

**Configuración fundamental:**

- Almacenes y ubicaciones lógicas.  
- Métodos FIFO, UEPS o promedio.  
- Reglas de reabastecimiento automáticas conectadas a Compras.

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

### Información ampliada

Odoo 16 Community ofrece potentes herramientas de Facturación y ciertos componentes de Contabilidad para gestionar las finanzas de la empresa. En la edición Community, el módulo de Facturación (Invoicing) está disponible con el cual se pueden crear facturas de clientes, registrar facturas de proveedores, gestionar pagos, impuestos básicos y reportes financieros esenciales. La Contabilidad completa (con contabilidad analítica, conciliación bancaria automática, etc.) es parte de Odoo Enterprise, pero la Community cubre muchos requerimientos estándar de facturación. Según la documentación: “La aplicación Facturación de Odoo es una aplicación autónoma para crear facturas, enviárselas a sus clientes y gestionar pagos. Contabilidad de Odoo es una aplicación con funciones de contabilidad completas...”
. Veamos cómo se estructura en Community: Facturación (Ventas): El módulo de Facturación permite emitir Facturas de cliente por ventas de productos o servicios. Estas facturas pueden generarse manualmente o automáticamente a partir de órdenes de venta confirmadas en el módulo Ventas (incluso se pueden emitir facturas periódicas si se configuran suscripciones, en Enterprise). Para cada factura se selecciona el cliente, se detallan los conceptos facturados (productos, cantidades, precio, impuestos) y se establece la fecha de vencimiento según términos de pago. Odoo soporta múltiples impuestos aplicables por producto y por cliente, manejando casos de impuestos incluidos o excluidos según configuración de empresa. Una vez validada, una factura puede ser enviada al cliente en PDF (Odoo genera un PDF profesional con el formato de factura). Luego, al recibirse el pago, se registra en el sistema, pudiendo conciliar el pago contra la factura para marcarla como Pagada. En Community, la conciliación es manual (el usuario aplica el pago a la factura correspondiente). “En Odoo, una factura se considera pagada cuando el asiento contable asociado se ha conciliado con los asientos de pago.”
– aunque la generación de asientos detallados es más propia de la Contabilidad completa, conceptualmente Community también refleja ese estado pagado al conciliar. Facturas de proveedor y pagos: De forma análoga, Odoo permite gestionar las Facturas de proveedor (o cuentas por pagar). Estas pueden capturarse manualmente o a partir de órdenes de compra. Se registra el proveedor, los productos o servicios que nos está facturando, importes, impuestos y fecha de vencimiento. Al validar, queda pendiente de pago. Cuando realizamos el pago (por transferencia, cheque, etc.), registramos ese pago en Odoo y marcamos la factura como pagada. Odoo puede manejar distintos métodos de pago y cuentas bancarias. En Community, la conciliación bancaria (igualar extractos del banco con las facturas pagadas) se realiza de forma semiautomática: el usuario carga los extractos (por importación de CSV, OFX) y luego empareja transacciones con facturas; la versión Enterprise añade herramientas de conciliación automática con inteligencia artificial y sincronización bancaria
. No obstante, Community brinda lo básico para llevar un control de qué facturas están pagadas o pendientes, tanto de clientes como de proveedores. Funciones contables básicas: Aunque la contabilidad completa (módulo “Contabilidad”) es limitada en Community, aún se puede llevar cierta contabilidad general: Odoo Community permite definir un Plan de Cuentas local (por ejemplo, cuentas contables para activos, pasivos, ingresos, gastos) y genera asientos contables básicos de facturas y pagos. Así, uno podría extraer un libro mayor o balance simple. Sin embargo, características como informes financieros avanzados, partidas analíticas, activos fijos, etc., pueden requerir módulos adicionales o la versión Enterprise. Aún así, Odoo Community cubre aspectos esenciales: manejo de múltiples monedas (con sus tipos de cambio), aplicación de retenciones impositivas simples, y reportes como edad de deuda (Antigüedad de saldos de clientes). En localizaciones como la de Ecuador, existen módulos comunitarios adicionales para cumplir requisitos fiscales (ejemplo: emisión de comprobantes electrónicos, retenciones de IVA e ISR, etc.), integrándose con el núcleo de facturación. En conclusión, con Facturación Odoo 16 Community permite administrar toda la cuenta por cobrar (facturación y cobro a clientes) y cuenta por pagar (facturas y pagos a proveedores) de forma eficiente. Es una aplicación amigable e independiente: “Facturación de Odoo es una aplicación autónoma para crear facturas... y gestionar pagos.”
. Para empresas pequeñas, estas funciones son suficientes para llevar un control financiero básico integrado con las ventas y compras. Para necesidades contables más complejas (como conciliaciones bancarias automáticas, informes legales avanzados, etc.), se puede considerar la instalación de módulos comunitarios adicionales o la migración a Enterprise. No obstante, el corazón del flujo financiero –facturar, registrar pagos, y obtener reportes esenciales de ingresos/gastos– está disponible en Odoo 16 Community de manera totalmente integrada con el resto de módulos.

### Instrucciones detalladas

**Proceso de facturación:**

1. **Generar factura de cliente**  
   Contabilidad → Clientes → Facturas → *Nuevo* → seleccione el pedido o cree líneas manuales.

2. **Validar y firmar electrónicamente**  
   Botón *Validar* → el sistema firma XML y envía al SRI.

3. **Enviar al cliente**  
   *Enviar por correo* adjunta PDF y XML autorizados.

4. **Registrar pagos**  
   Botón *Registrar pago* → conciliación automática.

5. **Notas de crédito**  
   Desde la factura → *Agregar nota de crédito* → especifique motivo y cantidades a revertir.

6. **Retenciones**  
   Agregar líneas de retención (fuente, IVA) antes de validar para cumplir con normativa ecuatoriana.

**Diarios y configuraciones:**

- Diarios de ventas, compras, bancos y caja chica.  
- Secuenciales autorizados (establecimiento + punto de emisión).  
- Impuestos con sus códigos SRI (IVA 12 %, IVA 0 %, ICE, IR).  
- Impresión de RIDE para clientes.

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

### Información ampliada

El módulo Empleados de Odoo (parte de las aplicaciones de Recursos Humanos) sirve para gestionar la información del personal de la empresa: datos personales, puesto, departamento, supervisores, contratos, etc. Es fundamental para centralizar la lista de empleados y sus detalles. De acuerdo a la documentación: “La aplicación Empleados de Odoo organiza los registros, contratos y departamentos de los empleados de una empresa.”
. En Odoo 16 Community, el módulo de Empleados ofrece registro básico de empleados y estructuración de la empresa, mientras que funcionalidades avanzadas de RH (ausencias, evaluaciones, nómina) pueden no estar incluidas sin módulos adicionales. Ficha del empleado: Cada empleado en Odoo tiene su propia ficha accesible desde Empleados > Todos los Empleados. Al crear un empleado nuevo, se especifica su Nombre, y opcionalmente se puede vincular con un Usuario del sistema (para darle permisos de acceso). También se completan campos como el Cargo/Puesto, el Departamento al que pertenece, quién es su Manager o responsable, la dirección de trabajo (por defecto la compañía) y datos de contacto como teléfono particular, correo electrónico, etc. Si la empresa gestiona contratos, en la pestaña Contrato se puede indicar el tipo de contrato, fecha de inicio, salario, y demás términos (aunque la funcionalidad de contratos y nómina completas son típicamente parte de localizaciones o de Odoo Enterprise). Estructura organizativa: El módulo Empleados permite reflejar la estructura organizativa mediante Departamentos. Podemos crear departamentos (por ejemplo Ventas, Operaciones, TI, Recursos Humanos) y asignar cada empleado a su departamento correspondiente, incluso indicando jefaturas. Esto es útil ya que en otros módulos (p.ej. Aprobaciones de gastos, ausencias, etc.) se utilizan estas jerarquías. También se pueden definir Equipos de Empleados para ciertos flujos. En Community, la información es mayormente referencial, es decir, no hay un proceso de aprobación robusto nativo, pero es base para otras apps. Integración con otras funciones de RRHH: Varias aplicaciones de Recursos Humanos complementan a Empleados. Por ejemplo, el módulo de Ausencias (vacaciones) y Gastos requieren la lista de empleados para registrar solicitudes. En Odoo 16 Community, es posible gestionar ausencias y gastos mediante módulos abiertos (aunque la aprobación multi-nivel es Enterprise). Aun sin esos módulos, Empleados nos sirve para tener un directorio interno del personal, con fotografía, información de contacto y posición de cada uno. Además, a través de los usuarios vinculados, se controlan los accesos: cada empleado con cuenta de usuario tendrá roles y permisos según su posición. En resumen, Empleados proporciona la base de datos del capital humano de la empresa en Odoo. Es simple en apariencia pero esencial: centraliza quién es quién en la organización. Al estar integrado con el resto del sistema, permite por ejemplo que en un parte de horas de Proyecto se sepa qué empleado la registró, o que en un pedido de venta quede constancia de qué vendedor lo creó, etc. Con este módulo, Odoo 16 Community organiza la información del personal y departamentos de forma ordenada y accesible
, sirviendo como punto de partida para cualquier funcionalidad relacionada con RR.HH.

- Afectación automática en nómina

### Instrucciones detalladas

**Flujo de Talento Humano y Nómina:**

1. **Crear empleado**  
   Empleados → *Nuevo* → complete datos personales, contrato y código interno.

2. **Definir contrato**  
   Empleados → Contratos → *Nuevo* → indique salario, tipo de jornada y fecha de inicio.

3. **Marcar asistencias**  
   Odoo asistencias o importación desde reloj biométrico.

4. **Procesar nómina mensual**  
   Nómina → *Nuevo periodo* → seleccione empleados → botón *Calcular* → revise liquidaciones.

5. **Generar archivos bancarios**  
   Reporte de pagos para banca electrónica.

6. **Décimos y utilidades**  
   Asistentes de Odoo para pago de décimo tercero, cuarto y participación de utilidades.

7. **Exportar IESS y SRI**  
   Generación de archivos CSV/XML para carga masiva.

**Parámetros claves:**

- Estructura salarial (sueldos, horas extras, comisiones).  
- Reglas salariales de ley ecuatoriana (IESS 9,45 %, fondos de reserva, impuesto a la renta).  
- Calendarios de vacaciones y ausencias.

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


## 14. FUNCIONALIDADES ESTÁNDAR

Las funcionalidades estándar están disponibles a lo largo de todos los módulos de Odoo 16 Community y representan la base de la experiencia de usuario. A continuación se describen los principales aspectos:

### 14.1. Interfaz de Usuario
- **Tablero de aplicaciones**: Acceso rápido a los módulos instalados.  
- **Barra superior**: Buscador global, actividades, mensajes, selector de empresa e idioma.  
- **Chatter**: Historial de mensajes, notas y archivos adjuntos en cada registro.  
- **Acciones en lote**: Selección múltiple en vistas de lista para validar, eliminar, exportar, etc.

### 14.2. Búsqueda y Filtrado
El buscador contextual permite localizar registros y aplicar filtros personalizados, agrupar resultados y guardar consultas favoritas.

### 14.3. Vistas y Personalización
- **Tipos de vista**: lista, kanban, calendario, Gantt, gráfico y pivote.  
- **Columnas reordenables**: Arrastrar encabezados en vistas de lista.  
- **Campos personalizados**: Añadir campos en modo desarrollador sin instalar módulos adicionales.  
- **Informes PDF**: Botón **Imprimir** para generar documentos listos para enviar o archivar.

### 14.4. Importación y Exportación
Exportación a CSV/Excel o importación de datos desde cualquier vista de lista con validación y mapeo de columnas.

### 14.5. Actividades y Comunicación
- **Actividades programadas**: Planificar llamadas, correos y reuniones con recordatorios.  
- **Menciones (@)**: Notificar a usuarios dentro del chatter.  
- **Plantillas de correo**: Enviar documentos directamente desde Odoo registrando copia en el chatter.

### 14.6. Ajustes del Sistema
La aplicación **Ajustes** centraliza la configuración global: datos de la compañía, usuarios y permisos, correo saliente/entrante, idiomas y zonas horarias. Para acceder a parámetros avanzados active el modo desarrollador añadiendo `?debug=1` a la URL.
