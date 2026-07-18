-- =====================================================
-- Bolis de Mari - Esquema de Base de Datos (Supabase)
-- =====================================================
-- Ejecutar esto en el editor SQL de Supabase (https://app.supabase.com)

-- 1. TABLA: ventas (una fila por día)
CREATE TABLE IF NOT EXISTS ventas (
  id SERIAL PRIMARY KEY,
  fecha DATE NOT NULL UNIQUE,
  coco INTEGER DEFAULT 0,
  pina INTEGER DEFAULT 0,
  tamarindo INTEGER DEFAULT 0,
  limon INTEGER DEFAULT 0,
  corozo INTEGER DEFAULT 0,
  galleta INTEGER DEFAULT 0,
  bocadillo INTEGER DEFAULT 0,
  cola INTEGER DEFAULT 0,
  mango INTEGER DEFAULT 0,
  guanabana INTEGER DEFAULT 0,
  maracuya INTEGER DEFAULT 0,
  hielo INTEGER DEFAULT 0,
  chocolate INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABLA: fiados (ventas a crédito)
CREATE TABLE IF NOT EXISTS fiados (
  id SERIAL PRIMARY KEY,
  cliente TEXT NOT NULL,
  telefono TEXT DEFAULT '',
  fecha DATE NOT NULL DEFAULT CURRENT_DATE,
  items JSONB DEFAULT '[]'::jsonb,
  total INTEGER NOT NULL DEFAULT 0,
  abonado INTEGER NOT NULL DEFAULT 0,
  notas TEXT DEFAULT '',
  estado TEXT NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('pendiente','pagado','cancelado')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TABLA: abonos (pagos parciales a fiados)
CREATE TABLE IF NOT EXISTS abonos (
  id SERIAL PRIMARY KEY,
  fiado_id INTEGER NOT NULL REFERENCES fiados(id) ON DELETE CASCADE,
  monto INTEGER NOT NULL,
  fecha DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_ventas_fecha ON ventas(fecha);
CREATE INDEX IF NOT EXISTS idx_fiados_estado ON fiados(estado);
CREATE INDEX IF NOT EXISTS idx_fiados_cliente ON fiados(cliente);
CREATE INDEX IF NOT EXISTS idx_abonos_fiado_id ON abonos(fiado_id);

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_ventas_updated_at
  BEFORE UPDATE ON ventas
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE OR REPLACE TRIGGER trg_fiados_updated_at
  BEFORE UPDATE ON fiados
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Activar Row Level Security (opcional, para producción)
ALTER TABLE ventas ENABLE ROW LEVEL SECURITY;
ALTER TABLE fiados ENABLE ROW LEVEL SECURITY;
ALTER TABLE abonos ENABLE ROW LEVEL SECURITY;

-- Políticas (permitir todo con anon key - ajustar según necesidades)
CREATE POLICY "Permitir todo ventas" ON ventas FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Permitir todo fiados" ON fiados FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Permitir todo abonos" ON abonos FOR ALL USING (true) WITH CHECK (true);
