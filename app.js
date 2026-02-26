/* ============================================
   APR Santa Cruz de Cuca - Application Logic
   ============================================ */

// ---- Demo Data ----
const SOCIOS_DATA = [
    { id: 'SOC-001', nombre: 'Juan Pérez García', rut: '12.345.678-9', sector: 'Norte', medidor: 'MED-001', estado: 'activo', consumo: 18 },
    { id: 'SOC-002', nombre: 'María González López', rut: '13.456.789-0', sector: 'Sur', medidor: 'MED-002', estado: 'activo', consumo: 22 },
    { id: 'SOC-003', nombre: 'Pedro Muñoz Ríos', rut: '14.567.890-1', sector: 'Centro', medidor: 'MED-003', estado: 'suspendido', consumo: 0 },
    { id: 'SOC-004', nombre: 'Ana Soto Vega', rut: '15.678.901-2', sector: 'Oriente', medidor: 'MED-004', estado: 'activo', consumo: 15 },
    { id: 'SOC-005', nombre: 'Carlos Ruiz Bravo', rut: '16.789.012-3', sector: 'Norte', medidor: 'MED-005', estado: 'activo', consumo: 25 },
    { id: 'SOC-006', nombre: 'Rosa Fernández Díaz', rut: '17.890.123-4', sector: 'Sur', medidor: 'MED-006', estado: 'activo', consumo: 12 },
    { id: 'SOC-007', nombre: 'Luis Morales Pinto', rut: '18.901.234-5', sector: 'Centro', medidor: 'MED-007', estado: 'inactivo', consumo: 0 },
    { id: 'SOC-008', nombre: 'Carmen Vargas Salas', rut: '19.012.345-6', sector: 'Oriente', medidor: 'MED-008', estado: 'activo', consumo: 19 },
    { id: 'SOC-009', nombre: 'Roberto Silva Campos', rut: '20.123.456-7', sector: 'Norte', medidor: 'MED-009', estado: 'activo', consumo: 31 },
    { id: 'SOC-010', nombre: 'Patricia Lagos Meza', rut: '21.234.567-8', sector: 'Sur', medidor: 'MED-010', estado: 'activo', consumo: 14 },
    { id: 'SOC-011', nombre: 'Miguel Herrera Fuentes', rut: '22.345.678-9', sector: 'Centro', medidor: 'MED-011', estado: 'activo', consumo: 20 },
    { id: 'SOC-012', nombre: 'Sofía Castro Navarro', rut: '23.456.789-0', sector: 'Oriente', medidor: 'MED-012', estado: 'activo', consumo: 17 },
    { id: 'SOC-013', nombre: 'Diego Araya Tapia', rut: '24.567.890-1', sector: 'Norte', medidor: 'MED-013', estado: 'suspendido', consumo: 0 },
    { id: 'SOC-014', nombre: 'Valentina Rojas Espinoza', rut: '25.678.901-2', sector: 'Sur', medidor: 'MED-014', estado: 'activo', consumo: 21 },
    { id: 'SOC-015', nombre: 'Andrés Molina Riquelme', rut: '26.789.012-3', sector: 'Centro', medidor: 'MED-015', estado: 'activo', consumo: 16 },
];

const PAGOS_DATA = [
    { fecha: '2026-02-25', socio: 'Juan Pérez García', monto: 15000, metodo: 'Transferencia', periodo: '2026-02', estado: 'pagado' },
    { fecha: '2026-02-24', socio: 'María González López', monto: 18500, metodo: 'Efectivo', periodo: '2026-02', estado: 'pagado' },
    { fecha: '2026-02-24', socio: 'Carlos Ruiz Bravo', monto: 22000, metodo: 'Tarjeta', periodo: '2026-02', estado: 'pagado' },
    { fecha: '2026-02-23', socio: 'Rosa Fernández Díaz', monto: 12000, metodo: 'Transferencia', periodo: '2026-02', estado: 'pagado' },
    { fecha: '2026-02-23', socio: 'Carmen Vargas Salas', monto: 16000, metodo: 'Efectivo', periodo: '2026-02', estado: 'pagado' },
    { fecha: '2026-02-22', socio: 'Roberto Silva Campos', monto: 28000, metodo: 'Transferencia', periodo: '2026-02', estado: 'pagado' },
    { fecha: '2026-02-21', socio: 'Ana Soto Vega', monto: 13500, metodo: 'Efectivo', periodo: '2026-01', estado: 'pagado' },
    { fecha: '2026-02-20', socio: 'Patricia Lagos Meza', monto: 14000, metodo: 'Transferencia', periodo: '2026-02', estado: 'pendiente' },
];

const DEUDORES_DATA = [
    { socio: 'Pedro Muñoz Ríos', rut: '14.567.890-1', meses: 4, deuda: 60000, ultimoPago: '2025-10-15' },
    { socio: 'Luis Morales Pinto', rut: '18.901.234-5', meses: 3, deuda: 45000, ultimoPago: '2025-11-20' },
    { socio: 'Diego Araya Tapia', rut: '24.567.890-1', meses: 2, deuda: 32000, ultimoPago: '2025-12-10' },
    { socio: 'Francisca Reyes Mora', rut: '27.890.123-4', meses: 5, deuda: 75000, ultimoPago: '2025-09-05' },
    { socio: 'Héctor Parra Olivares', rut: '28.901.234-5', meses: 1, deuda: 16000, ultimoPago: '2026-01-18' },
];

const AVERIAS_DATA = [
    { id: 'AV-2026-041', tipo: 'Fuga de agua', prioridad: 'alta', sector: 'Norte', descripcion: 'Fuga importante detectada en la conexión principal del sector norte, cerca del camino vecinal.', reportante: 'Juan Pérez', fecha: '2026-02-25', estado: 'pendiente', ubicacion: 'Camino Vecinal Norte Km 2', lat: -36.671, lng: -72.408 },
    { id: 'AV-2026-040', tipo: 'Baja presión', prioridad: 'media', sector: 'Sur', descripcion: 'Varios vecinos reportan baja presión en horas punta. Posible obstrucción en tubería principal.', reportante: 'María González', fecha: '2026-02-24', estado: 'en-proceso', ubicacion: 'Sector Sur - Calle Los Aromos', lat: -36.690, lng: -72.396 },
    { id: 'AV-2026-039', tipo: 'Rotura de tubería', prioridad: 'critica', sector: 'Centro', descripcion: 'Rotura de tubería de distribución. Agua emergiendo del suelo frente a la sede comunitaria.', reportante: 'Pedro Muñoz', fecha: '2026-02-24', estado: 'pendiente', ubicacion: 'Frente Sede Comunitaria', lat: -36.686, lng: -72.417 },
    { id: 'AV-2026-038', tipo: 'Problema de medidor', prioridad: 'baja', sector: 'Oriente', descripcion: 'Medidor MED-008 marca consumo irregular. Posible falla mecánica.', reportante: 'Carmen Vargas', fecha: '2026-02-23', estado: 'en-proceso', ubicacion: 'Propiedad SOC-008', lat: -36.695, lng: -72.410 },
    { id: 'AV-2026-037', tipo: 'Calidad del agua', prioridad: 'alta', sector: 'Norte', descripcion: 'Agua con coloración turbia reportada por 3 familias del sector.', reportante: 'Carlos Ruiz', fecha: '2026-02-22', estado: 'pendiente', ubicacion: 'Sector Norte - Parcela 12', lat: -36.674, lng: -72.405 },
];

const NOTIFICATIONS_DATA = [
    { id: 1, tipo: 'alerta', titulo: 'Avería crítica reportada', texto: 'Rotura de tubería en Sector Centro frente a la sede comunitaria. Se requiere atención inmediata.', tiempo: 'Hace 2 horas', unread: true },
    { id: 2, tipo: 'pago', titulo: 'Pago recibido - Juan Pérez', texto: 'Se ha registrado el pago de $15.000 correspondiente al período febrero 2026.', tiempo: 'Hace 3 horas', unread: true },
    { id: 3, tipo: 'averia', titulo: 'Fuga de agua - Sector Norte', texto: 'Se ha detectado una fuga importante en la conexión principal del sector norte.', tiempo: 'Hace 5 horas', unread: true },
    { id: 4, tipo: 'sistema', titulo: 'Respaldo automático completado', texto: 'El respaldo semanal de la base de datos se ha completado exitosamente.', tiempo: 'Hace 8 horas', unread: false },
    { id: 5, tipo: 'pago', titulo: '5 socios con deuda acumulada', texto: 'Hay 5 socios con deuda superior a 2 meses. Se recomienda enviar notificación de cobro.', tiempo: 'Hace 1 día', unread: true },
    { id: 6, tipo: 'sistema', titulo: 'Mantenimiento programado', texto: 'Se realizará mantenimiento preventivo en la planta de tratamiento el próximo sábado.', tiempo: 'Hace 1 día', unread: false },
    { id: 7, tipo: 'alerta', titulo: 'Nivel de estanque bajo', texto: 'El nivel del estanque de acumulación ha descendido al 45%. Se recomienda verificar caudal de captación.', tiempo: 'Hace 2 días', unread: true },
    { id: 8, tipo: 'pago', titulo: 'Cierre mensual enero 2026', texto: 'El cierre mensual de enero ha sido procesado. Tasa de cobro: 85%.', tiempo: 'Hace 3 días', unread: false },
];

const ACTIVITIES = [
    { icon: 'pay', iconName: 'dollar-sign', text: 'Pago recibido de Juan Pérez - $15.000', time: 'Hace 2 horas' },
    { icon: 'alert', iconName: 'alert-triangle', text: 'Avería reportada en Sector Centro', time: 'Hace 3 horas' },
    { icon: 'info', iconName: 'user-plus', text: 'Nuevo socio registrado: Valentina Rojas', time: 'Hace 5 horas' },
    { icon: 'pay', iconName: 'dollar-sign', text: 'Pago recibido de Carlos Ruiz - $22.000', time: 'Hace 6 horas' },
    { icon: 'warn', iconName: 'alert-circle', text: 'Baja presión detectada en Sector Sur', time: 'Hace 8 horas' },
    { icon: 'pay', iconName: 'dollar-sign', text: 'Pago recibido de Rosa Fernández - $12.000', time: 'Hace 1 día' },
    { icon: 'info', iconName: 'droplets', text: 'Lectura de medidores actualizada', time: 'Hace 1 día' },
];

// ---- GeoJSON Data (from Santa Cruz map) ----

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        splash.classList.add('fade-out');
        document.getElementById('app').style.display = 'flex';
        setTimeout(() => { splash.style.display = 'none'; }, 600);
        initApp();
    }, 2200);
});

function initApp() {
    lucide.createIcons();
    setupNavigation();
    setupSidebar();
    setupTheme();
    setupTabs();
    renderSocios();
    renderPagos();
    renderDeudores();
    renderAverias();
    renderNotifications();
    renderActivities();
    animateKPIs();
    initCharts();
    // Map initialized on first visit
}

// ========== NAVIGATION ==========
function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(item.dataset.page);
        });
    });
    window.addEventListener('hashchange', () => {
        const page = location.hash.replace('#', '') || 'dashboard';
        navigateTo(page, false);
    });
    if (location.hash) navigateTo(location.hash.replace('#', ''), false);
}

let mapInitialized = false;
function navigateTo(page, pushHash = true) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
    const pageEl = document.getElementById(`page-${page}`);
    if (navItem) navItem.classList.add('active');
    if (pageEl) pageEl.classList.add('active');
    const titles = { dashboard: 'Dashboard', socios: 'Gestión de Socios', pagos: 'Pagos y Deudas', mapa: 'Red de Agua', averias: 'Averías', notificaciones: 'Notificaciones' };
    document.getElementById('page-title').textContent = titles[page] || 'Dashboard';
    if (pushHash) location.hash = page;
    if (page === 'mapa' && !mapInitialized) { setTimeout(initMap, 100); mapInitialized = true; }
    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('mobile-open');
}

// ========== SIDEBAR ==========
function setupSidebar() {
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('collapsed');
    });
    document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('mobile-open');
    });
}

// ========== THEME ==========
function setupTheme() {
    const saved = localStorage.getItem('apr-theme');
    if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
        localStorage.setItem('apr-theme', isDark ? 'light' : 'dark');
    });
}

// ========== TABS ==========
function setupTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabGroup = tab.parentElement;
            tabGroup.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const parent = tabGroup.parentElement;
            parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            const target = document.getElementById(`tab-${tab.dataset.tab}`);
            if (target) target.classList.add('active');
            if (tab.dataset.tab === 'historial' && !window.historialChartInit) { initHistorialChart(); window.historialChartInit = true; }
        });
    });
}

// ========== KPI ANIMATION ==========
function animateKPIs() {
    document.querySelectorAll('.kpi-value').forEach(el => {
        const target = parseInt(el.dataset.target);
        const prefix = el.dataset.prefix || '';
        const duration = 1500;
        const start = Date.now();
        function update() {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * eased);
            el.textContent = prefix ? `$${current.toLocaleString('es-CL')}` : current.toLocaleString('es-CL');
            if (progress < 1) requestAnimationFrame(update);
        }
        update();
    });
}

// ========== RENDER FUNCTIONS ==========
function renderSocios() {
    const tbody = document.getElementById('socios-tbody');
    tbody.innerHTML = SOCIOS_DATA.map(s => `
        <tr>
            <td><strong>${s.id}</strong></td>
            <td>${s.nombre}</td>
            <td class="font-mono">${s.rut}</td>
            <td>${s.sector}</td>
            <td class="font-mono">${s.medidor}</td>
            <td><span class="status-badge ${s.estado}">${s.estado.charAt(0).toUpperCase() + s.estado.slice(1)}</span></td>
            <td>${s.consumo} m³</td>
            <td>
                <div class="table-actions">
                    <button title="Ver"><i data-lucide="eye" class="icon-sm"></i></button>
                    <button title="Editar"><i data-lucide="pencil" class="icon-sm"></i></button>
                    <button title="Pago"><i data-lucide="credit-card" class="icon-sm"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
    lucide.createIcons();
}

function renderPagos() {
    const tbody = document.getElementById('pagos-tbody');
    tbody.innerHTML = PAGOS_DATA.map(p => `
        <tr>
            <td>${p.fecha}</td>
            <td>${p.socio}</td>
            <td><strong>$${p.monto.toLocaleString('es-CL')}</strong></td>
            <td>${p.metodo}</td>
            <td>${p.periodo}</td>
            <td><span class="status-badge ${p.estado}">${p.estado.charAt(0).toUpperCase() + p.estado.slice(1)}</span></td>
            <td>
                <div class="table-actions">
                    <button title="Ver recibo"><i data-lucide="file-text" class="icon-sm"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
    lucide.createIcons();
}

function renderDeudores() {
    const tbody = document.getElementById('deudores-tbody');
    tbody.innerHTML = DEUDORES_DATA.map(d => `
        <tr>
            <td><strong>${d.socio}</strong></td>
            <td class="font-mono">${d.rut}</td>
            <td><span class="status-badge vencido">${d.meses} meses</span></td>
            <td><strong style="color:var(--danger-500)">$${d.deuda.toLocaleString('es-CL')}</strong></td>
            <td>${d.ultimoPago}</td>
            <td>
                <div class="table-actions">
                    <button title="Enviar aviso" onclick="showToast('Aviso de cobro enviado')"><i data-lucide="send" class="icon-sm"></i></button>
                    <button title="Registrar pago"><i data-lucide="credit-card" class="icon-sm"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
    lucide.createIcons();
}

function renderAverias() {
    const grid = document.getElementById('averias-grid');
    const iconMap = { 'Fuga de agua': 'droplets', 'Baja presión': 'gauge', 'Rotura de tubería': 'construction', 'Problema de medidor': 'activity', 'Calidad del agua': 'flask-conical' };
    grid.innerHTML = AVERIAS_DATA.map(a => `
        <div class="averia-card">
            <div class="averia-card-header">
                <span class="averia-id">${a.id}</span>
                <span class="priority-badge ${a.prioridad}">${a.prioridad}</span>
            </div>
            <div class="averia-card-body">
                <div class="averia-tipo">
                    <div class="averia-tipo-icon"><i data-lucide="${iconMap[a.tipo] || 'alert-triangle'}" class="icon-sm"></i></div>
                    ${a.tipo}
                </div>
                <p class="averia-desc">${a.descripcion}</p>
                <div class="averia-meta">
                    <span class="averia-meta-item"><i data-lucide="map-pin" class="icon-sm"></i> ${a.sector}</span>
                    <span class="averia-meta-item"><i data-lucide="calendar" class="icon-sm"></i> ${a.fecha}</span>
                    <span class="averia-meta-item"><i data-lucide="user" class="icon-sm"></i> ${a.reportante}</span>
                </div>
            </div>
            <div class="averia-card-footer">
                <div class="averia-status">
                    <span class="status-dot ${a.estado}"></span>
                    ${a.estado === 'pendiente' ? 'Pendiente' : a.estado === 'en-proceso' ? 'En proceso' : 'Resuelta'}
                </div>
                <div class="averia-actions">
                    <button class="btn btn-sm btn-outline" onclick="showToast('Avería actualizada')">Actualizar</button>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderNotifications() {
    const list = document.getElementById('notifications-list');
    const iconMap = { alerta: 'alert-triangle', pago: 'dollar-sign', averia: 'wrench', sistema: 'settings' };
    list.innerHTML = NOTIFICATIONS_DATA.map(n => `
        <div class="notification-card ${n.unread ? 'unread' : ''}" onclick="this.classList.remove('unread')">
            <div class="notif-icon-wrap ${n.tipo}"><i data-lucide="${iconMap[n.tipo]}" class="icon-sm"></i></div>
            <div class="notif-content">
                <div class="notif-title">${n.titulo}</div>
                <div class="notif-text">${n.texto}</div>
                <div class="notif-time">${n.tiempo}</div>
            </div>
            ${n.unread ? '<div class="notif-unread-dot"></div>' : ''}
        </div>
    `).join('');
    lucide.createIcons();
    // Setup filters
    document.querySelectorAll('.notif-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.notif-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.notification-card').forEach(card => {
                if (filter === 'all') { card.style.display = ''; return; }
                const icon = card.querySelector('.notif-icon-wrap');
                card.style.display = icon && icon.classList.contains(filter) ? '' : 'none';
            });
        });
    });
}

function renderActivities() {
    const list = document.getElementById('activity-list');
    list.innerHTML = ACTIVITIES.map(a => `
        <div class="activity-item">
            <div class="activity-icon ${a.icon}"><i data-lucide="${a.iconName}" class="icon-sm"></i></div>
            <div class="activity-content">
                <div class="activity-text">${a.text}</div>
                <div class="activity-time">${a.time}</div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// ========== CHARTS ==========
function initCharts() {
    const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim() || '#e2e8f0';
    // Revenue Chart
    new Chart(document.getElementById('revenue-chart'), {
        type: 'bar',
        data: {
            labels: ['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb'],
            datasets: [{
                label: 'Recaudación ($)',
                data: [2800000, 3100000, 2950000, 3200000, 3050000, 3300000, 3150000, 3400000, 3250000, 3500000, 3350000, 3450000],
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, grid: { color: gridColor }, ticks: { callback: v => '$' + (v / 1000000).toFixed(1) + 'M' } }, x: { grid: { display: false } } }
        }
    });
    // Payment Doughnut
    new Chart(document.getElementById('payment-chart'), {
        type: 'doughnut',
        data: {
            labels: ['Al día', 'Con deuda', 'Suspendidos'],
            datasets: [{ data: [215, 27, 5], backgroundColor: ['#22c55e', '#f59e0b', '#ef4444'], borderWidth: 0, spacing: 2 }]
        },
        options: {
            responsive: true, maintainAspectRatio: false, cutout: '72%',
            plugins: { legend: { position: 'bottom', labels: { padding: 16, usePointStyle: true, pointStyleWidth: 10, font: { size: 12 } } } }
        }
    });
    // Consumption Chart
    new Chart(document.getElementById('consumption-chart'), {
        type: 'line',
        data: {
            labels: ['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb'],
            datasets: [{
                label: 'Consumo m³',
                data: [4200, 3800, 3500, 3200, 3000, 2800, 3100, 3400, 3700, 4000, 4300, 4100],
                borderColor: '#06b6d4',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#06b6d4',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: false, grid: { color: gridColor } }, x: { grid: { display: false } } }
        }
    });
}

function initHistorialChart() {
    new Chart(document.getElementById('historial-chart'), {
        type: 'bar',
        data: {
            labels: ['Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb'],
            datasets: [
                { label: 'Recaudado', data: [3150000, 3400000, 3250000, 3500000, 3350000, 3450000], backgroundColor: 'rgba(34,197,94,0.7)', borderRadius: 4 },
                { label: 'Deuda', data: [850000, 780000, 920000, 680000, 750000, 1280000], backgroundColor: 'rgba(239,68,68,0.7)', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } },
            scales: { y: { beginAtZero: true, ticks: { callback: v => '$' + (v / 1000000).toFixed(1) + 'M' } }, x: { grid: { display: false } } }
        }
    });
}

// ========== MAP ==========
function initMap() {
    const map = L.map('water-map', { zoomControl: true }).setView([-36.6765, -72.395], 13);
    // Satellite base
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri', maxZoom: 19
    }).addTo(map);

    // Layers object for toggle
    const layers = {};

    // Area de Servicio
    layers.servicio = L.geoJson(null, {
        style: { color: '#1e08c5', weight: 2, fillColor: '#e8718d', fillOpacity: 0, opacity: 1 }
    }).addTo(map);

    // Entidades Rurales
    layers.entidades = L.geoJson(null, {
        style: { color: '#fff5f0', weight: 3, fillColor: '#7d8b8f', fillOpacity: 0, opacity: 1 }
    }).addTo(map);

    // Red de Agua Potable
    layers.red = L.geoJson(null, {
        style: { color: '#ff7f00', weight: 3, opacity: 1 },
        onEachFeature: (f, l) => l.bindPopup(`<strong>Red de Agua Potable</strong><br>Tramo: ${f.properties.fid}`)
    }).addTo(map);

    // Edificaciones
    layers.edificaciones = L.geoJson(null, {
        pointToLayer: (f, latlng) => L.circleMarker(latlng, { radius: 3.2, fillColor: '#ffff33', color: '#232323', weight: 1, fillOpacity: 1 }),
        onEachFeature: (f, l) => l.bindPopup(`<strong>Edificación</strong><br>Uso: ${f.properties.USO_EDIFIC || 'N/D'}`)
    }).addTo(map);

    // APRs
    layers.aprs = L.geoJson(null, {
        pointToLayer: (f, latlng) => L.circleMarker(latlng, { radius: 6, fillColor: '#ff0000', color: '#232323', weight: 1, fillOpacity: 1 }),
        onEachFeature: (f, l) => l.bindPopup(`<strong>${f.properties.name || 'APR'}</strong><br>Comuna: ${f.properties.Comuna || ''}`)
    }).addTo(map);

    // Averías markers
    layers.averias = L.layerGroup().addTo(map);
    AVERIAS_DATA.forEach(a => {
        if (a.lat && a.lng) {
            const color = a.prioridad === 'critica' ? '#b91c1c' : a.prioridad === 'alta' ? '#ef4444' : a.prioridad === 'media' ? '#f59e0b' : '#22c55e';
            const icon = L.divIcon({ className: '', html: `<div style="width:24px;height:24px;background:${color};border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg></div>`, iconSize: [24, 24], iconAnchor: [12, 12] });
            L.marker([a.lat, a.lng], { icon }).addTo(layers.averias)
                .bindPopup(`<strong>${a.tipo}</strong><br>Prioridad: <span style="color:${color};font-weight:bold">${a.prioridad.toUpperCase()}</span><br>${a.descripcion}<br><small>${a.ubicacion}</small>`);
        }
    });

    // Load GeoJSON data via fetch from original map data
    const dataBase = 'data/';
    loadGeoJSONScript(dataBase + 'AreadeServicio_5.js', 'json_AreadeServicio_5', layers.servicio);
    loadGeoJSONScript(dataBase + 'EntidadesRurales_2.js', 'json_EntidadesRurales_2', layers.entidades);
    loadGeoJSONScript(dataBase + 'ReddeAguaPotable_4.js', 'json_ReddeAguaPotable_4', layers.red);
    loadGeoJSONScript(dataBase + 'Edificaciones_3.js', 'json_Edificaciones_3', layers.edificaciones);
    loadGeoJSONScript(dataBase + 'APRs_6.js', 'json_APRs_6', layers.aprs);

    // Layer toggle controls
    const toggleMap = { 'layer-red': 'red', 'layer-aprs': 'aprs', 'layer-edificaciones': 'edificaciones', 'layer-servicio': 'servicio', 'layer-entidades': 'entidades', 'layer-averias-map': 'averias' };
    Object.entries(toggleMap).forEach(([inputId, layerKey]) => {
        const cb = document.getElementById(inputId);
        if (cb) cb.addEventListener('change', () => {
            if (cb.checked) map.addLayer(layers[layerKey]);
            else map.removeLayer(layers[layerKey]);
        });
    });

    // Toggle legend sidebar
    document.getElementById('toggle-legend').addEventListener('click', () => {
        document.getElementById('map-sidebar').classList.toggle('open');
    });

    setTimeout(() => map.invalidateSize(), 200);
}

function loadGeoJSONScript(url, varName, layer) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
        if (window[varName]) layer.addData(window[varName]);
    };
    document.head.appendChild(script);
}

// ========== MODALS ==========
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('open');
    });
});

// ========== FORM HANDLERS ==========
function saveSocio(e) {
    e.preventDefault();
    closeModal('modal-socio');
    showToast('Socio registrado exitosamente');
    e.target.reset();
}

function savePago(e) {
    e.preventDefault();
    closeModal('modal-pago');
    showToast('Pago registrado exitosamente');
    e.target.reset();
}

function saveAveria(e) {
    e.preventDefault();
    closeModal('modal-averia');
    showToast('Avería reportada exitosamente');
    e.target.reset();
}

function sendNotification(e) {
    e.preventDefault();
    closeModal('modal-notificacion');
    showToast('Notificación enviada exitosamente');
    e.target.reset();
}

function exportPayments() { showToast('Exportación iniciada - descargando archivo...'); }

function markAllRead() {
    document.querySelectorAll('.notification-card.unread').forEach(c => c.classList.remove('unread'));
    document.querySelectorAll('.notif-unread-dot').forEach(d => d.remove());
    showToast('Todas las notificaciones marcadas como leídas');
}

// ========== TOAST ==========
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}
function hideToast() { document.getElementById('toast').classList.remove('show'); }

// ========== SEARCH ==========
document.getElementById('search-socios')?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('#socios-tbody tr').forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
});
