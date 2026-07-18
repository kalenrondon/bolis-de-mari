// ═══════════════════════════════════════════════════════
// DEBUG OVERLAY
// ═══════════════════════════════════════════════════════
(function(){
  var d=document.createElement('div');d.id='dbg';
  document.body.prepend(d);
  d.innerHTML='⏳ Cargando...\n';
  var log=console.log,err=console.error,warn=console.warn;
  console.log=function(){log.apply(console,arguments);d.innerHTML+='📌 '+Array.from(arguments).join(' ')+'\n';d.scrollTop=d.scrollHeight};
  console.error=function(){err.apply(console,arguments);d.innerHTML+='❌ '+Array.from(arguments).join(' ')+'\n';d.scrollTop=d.scrollHeight};
  console.warn=function(){warn.apply(console,arguments);d.innerHTML+='⚠️ '+Array.from(arguments).join(' ')+'\n';d.scrollTop=d.scrollHeight};
})();

// ═══════════════════════════════════════════════════════
// CONFIGURACIÓN
// ═══════════════════════════════════════════════════════
const SABORES = [
  {id:"coco",       nombre:"Coco",       emoji:"🥥", precio:1000},
  {id:"pina",       nombre:"Piña",       emoji:"🍍", precio:1000},
  {id:"tamarindo",  nombre:"Tamarindo",  emoji:"🟤", precio:1000},
  {id:"limon",      nombre:"Limón",      emoji:"🍋", precio:1000},
  {id:"corozo",     nombre:"Corozo",     emoji:"🫐", precio:1000},
  {id:"galleta",    nombre:"Galleta",    emoji:"🍪", precio:1000},
  {id:"bocadillo",  nombre:"Bocadillo",  emoji:"🟥", precio:1000},
  {id:"cola",       nombre:"Cola",       emoji:"🥤", precio:1000},
  {id:"mango",      nombre:"Mango",      emoji:"🥭", precio:1000},
  {id:"guanabana",  nombre:"Guanábana",  emoji:"💚", precio:1000},
  {id:"maracuya",   nombre:"Maracuyá",   emoji:"🟡", precio:1000},
  {id:"hielo",      nombre:"Hielo",      emoji:"🧊", precio:500},
  {id:"chocolate",  nombre:"Chocolate",  emoji:"🍫", precio:1000},
];

const FRASES = [
  '"Todo lo puedo en Cristo que me fortalece." — Fil. 4:13',
  'Dios bendice el trabajo de tus manos hoy.',
  '"El Señor es mi pastor, nada me faltará." — Sal. 23:1',
  'Cada boli vendido es una bendición de Dios.',
  '"Confía en el Señor con todo tu corazón." — Prov. 3:5',
  '¡Dios ve tu esfuerzo y te recompensará!',
  '"Pon tus obras en manos del Señor." — Prov. 16:3',
  '"El que busca, encuentra." — Mat. 7:8',
  'Con fe y trabajo, Dios multiplica tus ganancias.',
  '"Sean fuertes y valientes. No tengan miedo." — Jos. 1:9',
  'Tu dedicación honra a Dios. ¡Sigue adelante!',
  '"Busquen primero el reino de Dios." — Mat. 6:33',
  '"Yo sé los planes que tengo para ustedes, planes de bienestar." — Jer. 29:11',
  'Cada cliente es una oportunidad de dar alegría.',
  '"Den gracias a Dios en toda situación." — 1 Tes. 5:18',
  'Dios multiplica lo poco cuando se hace con amor.',
  '"Esfuérzate y sé valiente." — Jos. 1:7',
  'Tu trabajo es un acto de adoración. ¡Gloria a Dios!',
  '"Dios no nos ha dado espíritu de cobardía, sino de poder." — 2 Tim. 1:7',
  '"La alegría del Señor es tu fortaleza." — Neh. 8:10',
  '"Todo lo que hagan, háganlo de corazón." — Col. 3:23',
  'Hoy Dios abrirá puertas que nadie puede cerrar.',
  '"El Señor te guardará de todo mal." — Sal. 121:7',
  'Tu esfuerzo de hoy es la cosecha del mañana.',
  'Dios ve cada sacrificio que haces por tu familia.',
  '"Mas gracias sean dadas a Dios, que nos da la victoria." — 1 Cor. 15:57',
  '¡Eres más que vencedora en Cristo Jesús!',
  'Con cada boli que vendes, manifiestas la bondad de Dios.',
  '"No se angustien. Confíen en Dios." — Juan 14:1',
  '"Dios proveerá." — Gén. 22:14',
  '"Él da esfuerzo al cansado." — Isa. 40:29',
  'Cada amanecer es una nueva oportunidad de glorificar a Dios.',
  '"Bendito el hombre que confía en el Señor." — Jer. 17:7',
  '"Fortalécete y cobra ánimo." — Sal. 27:14',
  '"Mi Dios, pues, suplirá todo lo que les falte." — Fil. 4:19',
  '¡Hoy será un gran día de ventas, créelo!',
  '"Clama a mí y yo te responderé." — Jer. 33:3',
  '¡Eres imparable y bendecida por Dios!',
  '"El Señor es tu luz y tu salvación." — Sal. 27:1',
  '¡Tus bolis refrescan el cuerpo y Dios refresca tu alma!',
  'No te rindas, lo mejor de Dios está por venir.',
  '"Dios hace todas las cosas para bien." — Rom. 8:28',
  '"Si Dios está por nosotros, ¿quién contra nosotros?" — Rom. 8:31',
  '"Todas las cosas son posibles para Dios." — Mar. 10:27',
  '"Alégrate en el Señor siempre." — Fil. 4:4',
  '"Nunca te dejaré ni te abandonaré." — Heb. 13:5',
  '"El Señor cumplirá en mí su propósito." — Sal. 138:8',
  '"El que comenzó tan buena obra en ustedes la irá perfeccionando." — Fil. 1:6',
  '"Den y se les dará." — Luc. 6:38',
  '"El Señor te hará la cabeza y no la cola." — Deut. 28:13',
  '"Porque con Dios nada es imposible." — Luc. 1:37',
  '"Grande es el Señor y digno de alabanza." — Sal. 145:3',
  '"Ustedes son la luz del mundo." — Mat. 5:14',
  '"El trabajo de sus manos comerán; dichosos serán." — Sal. 128:2',
  '"El Señor guía los pasos del hombre." — Sal. 37:23',
  '"El Señor te bendiga y te guarde." — Núm. 6:24',
  '"La paz de Dios guarde sus corazones." — Fil. 4:7',
  'Tu negocio es un testimonio del Reino de Dios.',
  '"Por tanto, no desmayemos al hacer el bien." — Gál. 6:9',
  '"Él hace que todo coopere para el bien." — Rom. 8:28',
  '"Mujer virtuosa, su valor supera al de las piedras preciosas." — Prov. 31:10',
  '"Sus hijos se levantarán y la llamarán bienaventurada." — Prov. 31:28',
  '"Ella extiende su mano al pobre." — Prov. 31:20',
  '¡Este es el día que hizo el Señor, alegrémonos en él!',
  'Tu perseverancia en el negocio es un testimonio poderoso.',
  'Dios honra a quienes le honran en su trabajo.',
  '¡Más bendiciones están de camino! Solo persevera.',
  'Tu fe activa las promesas de Dios.',
  '"Bienaventurada tú entre las mujeres." — Luc. 1:42',
  '"Dios nos ha dado espíritu de poder y de amor." — 2 Tim. 1:7',
  '"Yo he venido para que tengan vida abundante." — Juan 10:10',
  'Trabajas para Dios primero. ¡Eso hace la diferencia!',
  '¡El cielo celebra cada uno de tus logros!',
  '"Jehová es bueno; su misericordia es para siempre." — Sal. 100:5',
  '"El Señor está cerca." — Fil. 4:5',
  '"Bendito el Señor; cada día nos colma de beneficios." — Sal. 68:19',
  '"La alegría del Señor es tu fortaleza." — Neh. 8:10',
  'Con cada boli llevas alegría y Dios lo ve.',
];

// ═══════════════════════════════════════════════════════
// SUPABASE
// ═══════════════════════════════════════════════════════
const SUPABASE_URL = "https://dysbrehrmumijbkkhbzs.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5c2JyZWhybXVtaWpia2toYnpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzODg0NjQsImV4cCI6MjA5OTk2NDQ2NH0.C-0502AFKhXqak9JTVR2Ypz-aEJfQUWir3o0gL_egHk";

let supabase = null;

function initSupabase() {
  var cb = function() {
    var lib = window.supabase || window.supabaseJs;
    if (lib && lib.createClient) {
      try {
        supabase = lib.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log("✅ Supabase conectado");
      } catch(e) {
        console.warn("Supabase error:", e);
      }
    } else {
      console.log("⏳ Supabase lib aún no cargada, reintentando...");
      setTimeout(cb, 300);
    }
  };
  cb();
}

// ═══════════════════════════════════════════════════════
// ESTADO GLOBAL
// ═══════════════════════════════════════════════════════
const SK = "bolismari_v5";
let DB = {};
let vista = "ventas";
let diaOpen = null;
let fraseI = -1;
let syncing = false;
let syncTimer = null;
let charts = {};
let fiados = [];
let editandoFiado = null;

// ═══════════════════════════════════════════════════════
// FECHA
// ═══════════════════════════════════════════════════════
function hoy() {
  var d = new Date();
  var y = d.getFullYear();
  var m = String(d.getMonth()+1).padStart(2,"0");
  var dd = String(d.getDate()).padStart(2,"0");
  return y+"-"+m+"-"+dd;
}

function fechaLinda(k) {
  if (!k) return "";
  var p = k.split("-");
  var M = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  return parseInt(p[2])+" "+M[parseInt(p[1])-1]+" "+p[0];
}

function cop(n) {
  return "$"+Number(n).toLocaleString("es-CO");
}

// ═══════════════════════════════════════════════════════
// STORAGE LOCAL
// ═══════════════════════════════════════════════════════
function cargar() {
  try { var r = localStorage.getItem(SK); if (r) DB = JSON.parse(r); } catch(e){}
  try { var f = localStorage.getItem("bolismari_fiados"); if (f) fiados = JSON.parse(f); } catch(e){}
}

function guardarLocal() {
  try { localStorage.setItem(SK, JSON.stringify(DB)); } catch(e){}
}

function guardarFiadosLocal() {
  try { localStorage.setItem("bolismari_fiados", JSON.stringify(fiados)); } catch(e){}
}

// ═══════════════════════════════════════════════════════
// HELPERS DB
// ═══════════════════════════════════════════════════════
function getDia(k) {
  var d = DB[k] || {};
  var o = {};
  SABORES.forEach(function(s) { o[s.id] = d[s.id] || 0; });
  return o;
}

function totales(k) {
  var d = getDia(k);
  var bolis = 0, ganancia = 0;
  SABORES.forEach(function(s) { bolis += d[s.id]; ganancia += d[s.id] * s.precio; });
  return { bolis: bolis, ganancia: ganancia };
}

// ═══════════════════════════════════════════════════════
// SUPABASE SYNC
// ═══════════════════════════════════════════════════════
async function sincronizar() {
  if (!supabase || syncing) return;
  syncing = true;
  badge("⏳ Sincronizando...", "#4D96FF");

  try {
    var dias = Object.keys(DB);
    for (var i = 0; i < dias.length; i++) {
      var fecha = dias[i];
      var data = DB[fecha];
      var row = { fecha: fecha };
      SABORES.forEach(function(s) { row[s.id] = data[s.id] || 0; });
      var res = await supabase.from("ventas").upsert(row, { onConflict: "fecha" });
      if (res.error) console.warn("Error upsert venta:", fecha, res.error);
    }

    var r = await supabase.from("ventas").select("*");
    if (!r.error && r.data) {
      var cambios = false;
      r.data.forEach(function(rr) {
        var f = rr.fecha;
        if (!DB[f]) { DB[f] = {}; cambios = true; }
        SABORES.forEach(function(s) {
          var vr = parseInt(rr[s.id]) || 0;
          var vl = parseInt(DB[f][s.id]) || 0;
          if (vr > vl) { DB[f][s.id] = vr; cambios = true; }
        });
      });
      if (cambios) guardarLocal();
    }

    try {
      var fr = await supabase.from("fiados").select("*").order("id", { ascending: false });
      if (!fr.error && fr.data) {
        fiados = fr.data.map(function(f) {
          return {
            id: f.id, cliente: f.cliente, telefono: f.telefono || "",
            fecha: f.fecha, items: f.items || [], total: f.total,
            abonado: f.abonado, notas: f.notas || "", estado: f.estado,
            created_at: f.created_at
          };
        });
        guardarFiadosLocal();
      }
    } catch(fe) { console.warn("Error sync fiados:", fe); }

    badge("✅ Sincronizado", "#6BCB77");
    setTimeout(function() { badge("☁️ Supabase activo", "rgba(255,255,255,.35)"); }, 2500);

  } catch(e) {
    console.warn("Sync error:", e);
    badge("⚠️ Sin conexión", "#FF8787");
    setTimeout(function() { badge("💾 Local", "rgba(255,255,255,.35)"); }, 3000);
  } finally {
    syncing = false;
    pintarTodo();
  }
}

function programarSync() {
  if (!supabase) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(sincronizar, 2500);
}

async function poll() {
  if (!supabase || syncing) return;
  try {
    var r = await supabase.from("ventas").select("*");
    if (r.error || !r.data) return;
    var cambios = false;
    r.data.forEach(function(rr) {
      var f = rr.fecha;
      if (!DB[f]) { DB[f] = {}; cambios = true; }
      SABORES.forEach(function(s) {
        var vr = parseInt(rr[s.id]) || 0;
        var vl = parseInt(DB[f][s.id]) || 0;
        if (vr > vl) { DB[f][s.id] = vr; cambios = true; }
      });
    });
    if (cambios) {
      guardarLocal();
      pintarTodo();
      badge("🔄 Actualizado", "#6BCB77");
      setTimeout(function() { badge("☁️ Supabase activo", "rgba(255,255,255,.35)"); }, 2000);
    }
  } catch(e){}
}

// ═══════════════════════════════════════════════════════
// BADGE / TOAST / SONIDO / FRASES
// ═══════════════════════════════════════════════════════
function badge(txt, color) {
  var el = document.getElementById("badge");
  if (el) { el.textContent = txt; el.style.color = color || "rgba(255,255,255,.35)"; }
}

var toastT;
function toast(msg) {
  var el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("on");
  clearTimeout(toastT);
  toastT = setTimeout(function() { el.classList.remove("on"); }, 2200);
}

function bip(tipo) {
  try {
    var ctx = new (window.AudioContext||window.webkitAudioContext)();
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.connect(g);
    g.connect(ctx.destination);
    if (tipo === "+") {
      o.frequency.setValueAtTime(880, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime+0.12);
      g.gain.setValueAtTime(0.07, ctx.currentTime);
    } else {
      o.frequency.setValueAtTime(440, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(300, ctx.currentTime+0.12);
      g.gain.setValueAtTime(0.05, ctx.currentTime);
    }
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+0.2);
    o.type = "sine";
    o.start();
    o.stop(ctx.currentTime+0.22);
  } catch(e){}
}

function rotateFrase() {
  var i;
  do { i = Math.floor(Math.random() * FRASES.length); } while (i === fraseI);
  fraseI = i;
  var el = document.getElementById("frase");
  if (el) el.textContent = FRASES[i];
  var fc = document.getElementById("frase-cfg");
  if (fc) fc.textContent = FRASES[i];
}

// ═══════════════════════════════════════════════════════
// CONFIG SUPABASE
// ═══════════════════════════════════════════════════════
async function probarConexion() {
  try {
    var r = await supabase.from("ventas").select("fecha", { count: "exact", head: true });
    if (r.error) {
      mostrarCSt("❌ Error: "+r.error.message, "#FF8787");
    } else {
      mostrarCSt("✅ Conexión exitosa", "#6BCB77");
    }
  } catch(e) {
    mostrarCSt("❌ "+e.message, "#FF8787");
  }
}

function mostrarCSt(msg, color) {
  var el = document.getElementById("cst");
  if (!el) return;
  el.textContent = msg;
  el.style.color = color;
  el.style.background = color+"22";
  el.style.border = "1px solid "+color+"44";
  el.style.display = "block";
  setTimeout(function() { el.style.display = "none"; }, 4000);
}

// ═══════════════════════════════════════════════════════
// VENDER
// ═══════════════════════════════════════════════════════
function vender(id, delta) {
  bip(delta > 0 ? "+" : "-");
  var k = hoy();
  if (!DB[k]) DB[k] = {};
  DB[k][id] = Math.max(0, (DB[k][id] || 0) + delta);
  guardarLocal();
  pintarVentas();
  if (delta > 0 && Math.random() < 0.18) rotateFrase();
  programarSync();
}

// ═══════════════════════════════════════════════════════
// PINTAR VENTAS
// ═══════════════════════════════════════════════════════
function pintarVentas() {
  var k = hoy();
  var dia = getDia(k);
  var t = totales(k);

  var ganHoy = document.getElementById("ganHoy");
  if (ganHoy) ganHoy.textContent = cop(t.ganancia);
  var rTotal = document.getElementById("r-total");
  if (rTotal) rTotal.textContent = t.bolis;
  var rGan = document.getElementById("r-gan");
  if (rGan) rGan.textContent = cop(t.ganancia);

  var dias = Object.keys(DB);
  if (dias.length) {
    var tb = 0, tg = 0;
    for (var i = 0; i < dias.length; i++) {
      var tt = totales(dias[i]);
      tb += tt.bolis;
      tg += tt.ganancia;
    }
    var rProm = document.getElementById("r-prom");
    if (rProm) rProm.textContent = Math.round(tb/dias.length);
    var rPromgan = document.getElementById("r-promgan");
    if (rPromgan) rPromgan.textContent = cop(Math.round(tg/dias.length));
  }

  var lista = document.getElementById("lista-sabores");
  if (!lista) return;
  lista.innerHTML = "";
  for (var i = 0; i < SABORES.length; i++) {
    var s = SABORES[i];
    var v = dia[s.id] || 0;
    var on = v > 0;
    var div = document.createElement("div");
    div.className = "srow" + (on ? " on" : "");
    div.innerHTML =
      '<div class="semoji">'+s.emoji+'</div>'+
      '<div class="sinfo">'+
        '<div class="snombre">'+s.nombre+'</div>'+
        '<div class="sprecio">'+cop(s.precio)+' c/u</div>'+
      '</div>'+
      '<div class="sctrl">'+
        '<button class="bmenos" onclick="vender(\''+s.id+'\',-1)">−</button>'+
        '<div class="scant'+(on?" on":"")+'">'+v+'</div>'+
        '<button class="bmas" onclick="vender(\''+s.id+'\',1)">+</button>'+
      '</div>'+
      '<div class="sgan'+(on?" on":"")+'">'+cop(v*s.precio)+'</div>';
    lista.appendChild(div);
  }
}

// ═══════════════════════════════════════════════════════
// PINTAR HISTORIAL
// ═══════════════════════════════════════════════════════
function pintarHistorial() {
  var dias = Object.keys(DB).sort(function(a,b) { return b.localeCompare(a); });
  var ndias = document.getElementById("ndias");
  if (ndias) ndias.textContent = dias.length+" día(s)";
  var lista = document.getElementById("lista-hist");
  if (!lista) return;
  lista.innerHTML = "";

  if (!dias.length) {
    lista.innerHTML = '<div class="card" style="text-align:center;color:rgba(255,255,255,.25);padding:36px 16px">📦 Sin registros aún</div>';
    return;
  }

  for (var i = 0; i < dias.length; i++) {
    var k = dias[i];
    var t = totales(k);
    var open = diaOpen === k;

    var btn = document.createElement("button");
    btn.className = "dbtn" + (open ? " open" : "");
    btn.innerHTML =
      '<div style="text-align:left">'+
        '<div style="font-weight:800;font-size:15px">'+fechaLinda(k)+'</div>'+
        '<div style="font-size:12px;color:rgba(255,255,255,.35)">'+t.bolis+' bolis vendidos</div>'+
      '</div>'+
      '<div style="display:flex;align-items:center;gap:10px">'+
        '<div style="font-weight:900;font-size:17px;color:#FFD93D">'+cop(t.ganancia)+'</div>'+
        '<div style="color:rgba(255,255,255,.3);font-size:13px">'+(open?"▲":"▼")+'</div>'+
      '</div>';
    btn.onclick = (function(fecha) {
      return function() {
        diaOpen = diaOpen === fecha ? null : fecha;
        pintarHistorial();
      };
    })(k);
    lista.appendChild(btn);

    if (open) {
      var det = document.createElement("div");
      det.className = "ddet open";
      var d = getDia(k);
      var hay = false;
      for (var j = 0; j < SABORES.length; j++) {
        var s = SABORES[j];
        var v = d[s.id] || 0;
        if (!v) continue;
        hay = true;
        var f = document.createElement("div");
        f.className = "dfila";
        f.innerHTML =
          '<div style="display:flex;align-items:center;gap:8px;font-size:14px;font-weight:700">'+
            '<span>'+s.emoji+'</span>'+s.nombre+
          '</div>'+
          '<div style="display:flex;gap:14px;align-items:center">'+
            '<span style="color:#6BCB77;font-weight:800;font-size:16px">'+v+'</span>'+
            '<span style="color:#FFD93D;font-weight:700;font-size:13px">'+cop(v*s.precio)+'</span>'+
          '</div>';
        det.appendChild(f);
      }
      if (!hay) det.innerHTML = '<div style="color:rgba(255,255,255,.3);font-size:13px;text-align:center;padding:8px">Sin ventas registradas</div>';
      lista.appendChild(det);
    }
  }
}

// ═══════════════════════════════════════════════════════
// PINTAR STATS
// ═══════════════════════════════════════════════════════
function pintarStats() {
  var dias = Object.keys(DB).sort();
  var kpis = document.getElementById("kpis");
  if (!kpis) return;

  if (!dias.length) {
    kpis.innerHTML = '<div style="grid-column:1/-1;color:rgba(255,255,255,.3);text-align:center;padding:30px">Registra ventas para ver estadísticas</div>';
    return;
  }

  var nd = dias.length;
  var tg = 0;
  for (var i = 0; i < nd; i++) tg += totales(dias[i]).ganancia;
  var promg = Math.round(tg/nd);
  var mejork = dias[0];
  for (var i = 1; i < nd; i++) {
    if (totales(dias[i]).ganancia > totales(mejork).ganancia) mejork = dias[i];
  }

  kpis.innerHTML =
    '<div class="kcard"><div class="klbl">Total ganancias</div><div class="kval" style="color:#FFD93D">'+cop(tg)+'</div></div>'+
    '<div class="kcard"><div class="klbl">Días registrados</div><div class="kval" style="color:#4D96FF">'+nd+'</div></div>'+
    '<div class="kcard"><div class="klbl">Promedio/día</div><div class="kval" style="color:#6BCB77">'+cop(promg)+'</div></div>'+
    '<div class="kcard"><div class="klbl">Mejor día</div>'+
      '<div class="kval" style="color:#FF9F1C;font-size:13px">'+fechaLinda(mejork)+'<br>'+
      '<span style="font-size:14px;color:#FFD93D">'+cop(totales(mejork).ganancia)+'</span></div>'+
    '</div>';

  var porSabor = [];
  for (var i = 0; i < SABORES.length; i++) {
    var s = SABORES[i];
    var total = 0;
    for (var j = 0; j < dias.length; j++) total += getDia(dias[j])[s.id] || 0;
    porSabor.push({ id: s.id, nombre: s.nombre, emoji: s.emoji, precio: s.precio, total: total, ganancia: total*s.precio });
  }
  porSabor.sort(function(a,b) { return b.total - a.total; });
  porSabor = porSabor.filter(function(s) { return s.total > 0; });

  var pos = ["#FFD700","#C0C0C0","#CD7F32","#aaa","#aaa","#aaa"];
  var rk = document.getElementById("ranking");
  if (rk) {
    rk.innerHTML = '<div class="ctit">🏆 Ranking de sabores</div>';
    for (var i = 0; i < Math.min(porSabor.length, 6); i++) {
      rk.innerHTML +=
        '<div style="display:flex;align-items:center;gap:9px;margin-bottom:8px">'+
          '<span style="font-size:13px;font-weight:900;color:'+pos[i]+';width:20px">#'+(i+1)+'</span>'+
          '<span style="font-size:17px">'+porSabor[i].emoji+'</span>'+
          '<span style="flex:1;font-size:13px;font-weight:700">'+porSabor[i].nombre+'</span>'+
          '<span style="color:#6BCB77;font-weight:800;font-size:13px">'+porSabor[i].total+'</span>'+
          '<span style="color:#FFD93D;font-weight:700;font-size:12px">'+cop(porSabor[i].ganancia)+'</span>'+
        '</div>';
    }
  }

  // Charts
  if (charts.pie)  charts.pie.destroy();
  if (charts.bar)  charts.bar.destroy();
  if (charts.line) charts.line.destroy();
  if (charts.mes)  charts.mes.destroy();

  if (typeof Chart === "undefined") return;

  var PIE_C = ["#FFD93D","#6BCB77","#4D96FF","#FF6B6B","#C77DFF","#FF9F1C","#2EC4B6","#E71D36","#FF70A6","#70D6FF","#E9C46A","#06D6A0","#8B5E3C"];
  var AXES = {
    x:{ticks:{color:"rgba(255,255,255,.4)",font:{size:10}},grid:{display:false}},
    y:{ticks:{color:"rgba(255,255,255,.3)",font:{size:9}},grid:{color:"rgba(255,255,255,.05)"}}
  };
  var BASE = { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}} };

  var u14 = dias.slice(-14);

  try {
    charts.pie = new Chart(document.getElementById("cPie"), {
      type:"pie",
      data:{ labels:porSabor.map(function(s){return s.emoji+" "+s.nombre}), datasets:[{data:porSabor.map(function(s){return s.total}), backgroundColor:PIE_C, borderWidth:0}] },
      options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:true,position:"right",labels:{color:"rgba(255,255,255,.6)",font:{size:10},boxWidth:12}}} }
    });
  } catch(e){ console.warn("Chart pie error:", e); }

  try {
    charts.bar = new Chart(document.getElementById("cBar"), {
      type:"bar",
      data:{ labels:u14.map(function(k){return fechaLinda(k).slice(0,6)}), datasets:[{data:u14.map(function(k){return totales(k).ganancia}), backgroundColor:"#FFD93D", borderRadius:5}] },
      options: Object.assign({}, BASE, { scales: Object.assign({}, AXES, { y: Object.assign({}, AXES.y, { ticks: Object.assign({}, AXES.y.ticks, { callback:function(v){return "$"+Math.round(v/1000)+"k"} }) }) }) })
    });
  } catch(e){ console.warn("Chart bar error:", e); }

  try {
    charts.line = new Chart(document.getElementById("cLine"), {
      type:"line",
      data:{ labels:u14.map(function(k){return fechaLinda(k).slice(0,6)}), datasets:[{data:u14.map(function(k){return totales(k).bolis}), borderColor:"#6BCB77", backgroundColor:"rgba(107,203,119,.1)", borderWidth:2.5, pointBackgroundColor:"#6BCB77", pointRadius:4, tension:.3, fill:true}] },
      options: Object.assign({}, BASE, { scales: AXES })
    });
  } catch(e){ console.warn("Chart line error:", e); }

  var meses = {};
  for (var i = 0; i < dias.length; i++) {
    var m = dias[i].slice(0,7);
    if (!meses[m]) meses[m] = 0;
    meses[m] += totales(dias[i]).ganancia;
  }
  var mesK = Object.keys(meses).sort();
  var ML = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  var mesL = mesK.map(function(k) { var p=k.split("-"); return ML[parseInt(p[1])-1]+" "+p[0].slice(2); });

  try {
    charts.mes = new Chart(document.getElementById("cMes"), {
      type:"bar",
      data:{ labels:mesL, datasets:[{data:mesK.map(function(k){return meses[k]}), backgroundColor:"#C77DFF", borderRadius:5}] },
      options: Object.assign({}, BASE, { scales: Object.assign({}, AXES, { y: Object.assign({}, AXES.y, { ticks: Object.assign({}, AXES.y.ticks, { callback:function(v){return "$"+Math.round(v/1000)+"k"} }) }) }) })
    });
  } catch(e){ console.warn("Chart mes error:", e); }
}

// ═══════════════════════════════════════════════════════
// FIADOS
// ═══════════════════════════════════════════════════════
function abrirModalNuevoFiado() {
  editandoFiado = null;
  document.getElementById("modal-titulo").textContent = "📒 Nuevo Fiado";
  document.getElementById("fiado-id").value = "";
  document.getElementById("fiado-cliente").value = "";
  document.getElementById("fiado-telefono").value = "";
  document.getElementById("fiado-notas").value = "";
  document.getElementById("fiado-fecha").value = hoy();
  document.getElementById("fiado-items").innerHTML = '<div style="font-size:11px;color:rgba(255,255,255,.5);margin-bottom:6px">Productos:</div>';
  agregarItemFiado();
  actualizarTotalFiado();
  document.getElementById("modal-fiado").classList.add("open");
}

function cerrarModal() {
  document.getElementById("modal-fiado").classList.remove("open");
}

function agregarItemFiado() {
  var container = document.getElementById("fiado-items");
  var div = document.createElement("div");
  div.className = "mifila";
  var opts = "";
  for (var i = 0; i < SABORES.length; i++) {
    opts += '<option value="'+SABORES[i].id+'">'+SABORES[i].emoji+" "+SABORES[i].nombre+'</option>';
  }
  div.innerHTML =
    '<select onchange="actualizarTotalFiado()">'+opts+'</select>'+
    '<input type="number" value="1" min="1" onchange="actualizarTotalFiado()" style="width:60px">'+
    '<button onclick="this.parentElement.remove();actualizarTotalFiado()" style="background:rgba(255,100,100,.15);border:1px solid rgba(255,100,100,.3);color:#FF8787;border-radius:8px;padding:6px 10px;font-weight:700;font-size:12px">✕</button>';
  container.appendChild(div);
}

function actualizarTotalFiado() {
  var filas = document.querySelectorAll("#fiado-items .mifila");
  var total = 0;
  for (var i = 0; i < filas.length; i++) {
    var sel = filas[i].querySelector("select");
    var cant = parseInt(filas[i].querySelector("input").value) || 0;
    for (var j = 0; j < SABORES.length; j++) {
      if (SABORES[j].id === sel.value) {
        total += cant * SABORES[j].precio;
        break;
      }
    }
  }
  document.getElementById("fiado-total").textContent = cop(total);
}

async function guardarFiado() {
  var cliente = document.getElementById("fiado-cliente").value.trim();
  if (!cliente) { toast("⚠️ Ingresa el nombre del cliente"); return; }
  var telefono = document.getElementById("fiado-telefono").value.trim();
  var notas = document.getElementById("fiado-notas").value.trim();
  var fecha = document.getElementById("fiado-fecha").value;

  var filas = document.querySelectorAll("#fiado-items .mifila");
  var items = [];
  for (var i = 0; i < filas.length; i++) {
    var sel = filas[i].querySelector("select");
    var cant = parseInt(filas[i].querySelector("input").value) || 0;
    if (cant > 0) {
      for (var j = 0; j < SABORES.length; j++) {
        if (SABORES[j].id === sel.value) {
          items.push({ sabor: sel.value, nombre: SABORES[j].nombre, cantidad: cant, precio: SABORES[j].precio });
          break;
        }
      }
    }
  }

  if (!items.length) { toast("⚠️ Agrega al menos un producto"); return; }
  var total = 0;
  for (var i = 0; i < items.length; i++) total += items[i].cantidad * items[i].precio;

  var fiado = { cliente: cliente, telefono: telefono, fecha: fecha, items: items, total: total, abonado: 0, notas: notas, estado: "pendiente" };

  if (supabase) {
    var res = await supabase.from("fiados").insert(fiado).select();
    if (res.error) { toast("❌ Error al guardar: "+res.error.message); return; }
    if (res.data && res.data[0]) fiado.id = res.data[0].id;
  } else {
    fiado.id = Date.now();
  }

  fiados.unshift(fiado);
  guardarFiadosLocal();

  cerrarModal();
  toast("✅ Fiado registrado con "+cliente);
  pintarFiados();
  programarSync();
}

function pintarFiados() {
  var pendienteTotal = 0;
  var activos = 0;
  var cobradoHoy = 0;
  for (var i = 0; i < fiados.length; i++) {
    var f = fiados[i];
    if (f.estado === "pendiente") {
      pendienteTotal += f.total - (f.abonado || 0);
      activos++;
      cobradoHoy += f.abonado || 0;
    }
  }

  document.getElementById("f-pendiente").textContent = cop(pendienteTotal);
  document.getElementById("f-activos").textContent = activos;
  document.getElementById("f-cobrado").textContent = cop(cobradoHoy);

  var lista = document.getElementById("lista-fiados");
  if (!lista) return;
  lista.innerHTML = "";

  if (!fiados.length) {
    lista.innerHTML = '<div class="card" style="text-align:center;color:rgba(255,255,255,.25);padding:36px 16px">📒 Sin fiados registrados</div>';
    return;
  }

  for (var i = 0; i < fiados.length; i++) {
    var f = fiados[i];
    var saldo = f.total - (f.abonado || 0);
    var div = document.createElement("div");
    div.className = "frow" + (f.estado === "pagado" ? " pagado" : "");
    var fechaF = fechaLinda(f.fecha);
    var itemsStr = (f.items || []).map(function(it) { return it.cantidad+" "+it.nombre; }).join(", ");
    div.innerHTML =
      '<div class="fhead">'+
        '<div class="fnombre">'+f.cliente+(f.telefono?" 📞":"")+'</div>'+
        '<div class="festado '+f.estado+'">'+(f.estado==="pendiente"?"Pendiente":"Pagado")+'</div>'+
      '</div>'+
      '<div class="fdet">'+fechaF+" · "+itemsStr+(f.notas?" · "+f.notas:"")+'</div>'+
      '<div class="fmonto">'+
        '<div class="ftotal">'+cop(saldo)+((f.estado==="pendiente")?' <span class="fabono">(abono: '+cop(f.abonado||0)+')</span>':"")+'</div>'+
      '</div>'+
      (f.estado==="pendiente"?
        '<div class="facciones">'+
          '<button class="btn-abonar" onclick="abrirModalAbono('+f.id+')">💰 Abonar</button>'+
          '<button class="btn-pagar" onclick="pagarFiado('+f.id+')">✅ Pagar todo</button>'+
          '<button class="btn-cancel" onclick="cancelarFiado('+f.id+')">✕</button>'+
        '</div>'
      :"");
    lista.appendChild(div);
  }
}

async function pagarFiado(id) {
  if (!confirm("¿Marcar este fiado como pagado?")) return;
  var fiado = null;
  for (var i = 0; i < fiados.length; i++) {
    if (fiados[i].id === id) { fiado = fiados[i]; break; }
  }
  if (!fiado) return;

  if (supabase) {
    var r = await supabase.from("fiados").update({ estado: "pagado", abonado: fiado.total }).eq("id", id);
    if (r.error) { toast("❌ Error: "+r.error.message); return; }
  }

  fiado.estado = "pagado";
  fiado.abonado = fiado.total;
  guardarFiadosLocal();
  toast("✅ Fiado marcado como pagado");
  pintarFiados();
  programarSync();
}

function abrirModalAbono(id) {
  var fiado = null;
  for (var i = 0; i < fiados.length; i++) {
    if (fiados[i].id === id) { fiado = fiados[i]; break; }
  }
  if (!fiado) return;
  document.getElementById("abono-fiado-id").value = id;
  document.getElementById("abono-cliente").textContent = fiado.cliente;
  document.getElementById("abono-monto").value = "";
  document.getElementById("abono-fecha").value = hoy();
  document.getElementById("modal-abono").classList.add("open");
}

function cerrarModalAbono() {
  document.getElementById("modal-abono").classList.remove("open");
}

async function guardarAbono() {
  var id = parseInt(document.getElementById("abono-fiado-id").value);
  var monto = parseInt(document.getElementById("abono-monto").value);
  var fecha = document.getElementById("abono-fecha").value;

  if (!monto || monto <= 0) { toast("⚠️ Ingresa un monto válido"); return; }

  var fiado = null;
  for (var i = 0; i < fiados.length; i++) {
    if (fiados[i].id === id) { fiado = fiados[i]; break; }
  }
  if (!fiado) return;

  var nuevoAbonado = (fiado.abonado || 0) + monto;
  var nuevoEstado = nuevoAbonado >= fiado.total ? "pagado" : "pendiente";

  if (supabase) {
    var r1 = await supabase.from("abonos").insert({ fiado_id: id, monto: monto, fecha: fecha });
    if (r1.error) { toast("❌ Error: "+r1.error.message); return; }
    var r2 = await supabase.from("fiados").update({ abonado: nuevoAbonado, estado: nuevoEstado }).eq("id", id);
    if (r2.error) { toast("❌ Error: "+r2.error.message); return; }
  }

  fiado.abonado = nuevoAbonado;
  fiado.estado = nuevoEstado;
  guardarFiadosLocal();
  cerrarModalAbono();
  toast("💰 Abono de "+cop(monto)+" registrado");
  pintarFiados();
  programarSync();
}

async function cancelarFiado(id) {
  if (!confirm("¿Cancelar este fiado?")) return;
  if (supabase) {
    var r = await supabase.from("fiados").update({ estado: "cancelado" }).eq("id", id);
    if (r.error) { toast("❌ Error: "+r.error.message); return; }
  }
  for (var i = 0; i < fiados.length; i++) {
    if (fiados[i].id === id) { fiados[i].estado = "cancelado"; break; }
  }
  guardarFiadosLocal();
  toast("🗑️ Fiado cancelado");
  pintarFiados();
  programarSync();
}

// ═══════════════════════════════════════════════════════
// PINTAR TODO
// ═══════════════════════════════════════════════════════
function pintarTodo() {
  pintarVentas();
  if (vista === "historial") pintarHistorial();
  if (vista === "stats")     pintarStats();
  if (vista === "fiados")    pintarFiados();
}

// ═══════════════════════════════════════════════════════
// NAVEGACIÓN
// ═══════════════════════════════════════════════════════
function ir(v) {
  vista = v;
  var secciones = ["ventas","historial","stats","fiados","config"];
  for (var i = 0; i < secciones.length; i++) {
    var n = secciones[i];
    var sec = document.getElementById("v-"+n);
    if (sec) sec.style.display = n === v ? "block" : "none";
    var nb = document.getElementById("nb-"+n);
    if (nb) {
      if (n === v) nb.classList.add("on"); else nb.classList.remove("on");
    }
  }
  if (v === "historial") pintarHistorial();
  if (v === "stats")     pintarStats();
  if (v === "fiados")    pintarFiados();
  if (v === "config") {
    var fc = document.getElementById("frase-cfg");
    if (fc) fc.textContent = FRASES[fraseI] || "";
  }
}

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════
cargar();
rotateFrase();
pintarVentas();
initSupabase();
badge("☁️ Supabase activo", "rgba(255,255,255,.35)");
sincronizar();
setInterval(poll, 30000);
setInterval(rotateFrase, 60000);
