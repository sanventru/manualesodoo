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
