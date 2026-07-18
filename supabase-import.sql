-- =====================================================
-- Importar datos históricos desde seed-data.json
-- =====================================================
-- 1. Copia el contenido de seed-data.json
-- 2. Reemplaza los valores en la subconsulta VALUES
-- 3. Ejecuta en el editor SQL de Supabase

-- Insertar datos en lote
INSERT INTO ventas (fecha, coco, pina, tamarindo, limon, corozo, galleta, bocadillo, cola, mango, guanabana, maracuya, hielo, chocolate)
SELECT * FROM json_populate_recordset(NULL::ventas, '[
  {"fecha":"2026-03-04","coco":2,"pina":3,"tamarindo":6,"limon":2,"corozo":7,"galleta":4,"bocadillo":3,"cola":1,"mango":5,"guanabana":0,"maracuya":2,"hielo":1,"chocolate":3},
  {"fecha":"2026-03-05","coco":3,"pina":5,"tamarindo":3,"limon":5,"corozo":0,"galleta":1,"bocadillo":7,"cola":0,"mango":2,"guanabana":0,"maracuya":5,"hielo":0,"chocolate":2},
  {"fecha":"2026-03-06","coco":1,"pina":0,"tamarindo":0,"limon":6,"corozo":8,"galleta":3,"bocadillo":1,"cola":0,"mango":1,"guanabana":0,"maracuya":3,"hielo":0,"chocolate":1},
  {"fecha":"2026-03-07","coco":2,"pina":2,"tamarindo":0,"limon":2,"corozo":2,"galleta":4,"bocadillo":2,"cola":0,"mango":1,"guanabana":0,"maracuya":4,"hielo":4,"chocolate":2},
  {"fecha":"2026-03-08","coco":1,"pina":0,"tamarindo":0,"limon":1,"corozo":0,"galleta":3,"bocadillo":1,"cola":0,"mango":0,"guanabana":0,"maracuya":1,"hielo":0,"chocolate":1},
  {"fecha":"2026-03-09","coco":3,"pina":0,"tamarindo":1,"limon":2,"corozo":1,"galleta":1,"bocadillo":1,"cola":1,"mango":2,"guanabana":0,"maracuya":0,"hielo":5,"chocolate":1},
  {"fecha":"2026-03-10","coco":2,"pina":0,"tamarindo":1,"limon":4,"corozo":6,"galleta":2,"bocadillo":0,"cola":5,"mango":2,"guanabana":0,"maracuya":3,"hielo":13,"chocolate":2},
  {"fecha":"2026-03-11","coco":4,"pina":2,"tamarindo":2,"limon":2,"corozo":2,"galleta":4,"bocadillo":0,"cola":2,"mango":1,"guanabana":0,"maracuya":1,"hielo":14,"chocolate":2},
  {"fecha":"2026-03-12","coco":1,"pina":3,"tamarindo":3,"limon":1,"corozo":4,"galleta":0,"bocadillo":3,"cola":3,"mango":0,"guanabana":0,"maracuya":5,"hielo":1,"chocolate":0},
  {"fecha":"2026-03-13","coco":3,"pina":2,"tamarindo":1,"limon":1,"corozo":5,"galleta":5,"bocadillo":4,"cola":3,"mango":2,"guanabana":0,"maracuya":4,"hielo":5,"chocolate":7},
  {"fecha":"2026-03-14","coco":13,"pina":4,"tamarindo":5,"limon":8,"corozo":10,"galleta":2,"bocadillo":1,"cola":12,"mango":4,"guanabana":1,"maracuya":8,"hielo":12,"chocolate":3},
  {"fecha":"2026-03-15","coco":5,"pina":3,"tamarindo":6,"limon":7,"corozo":4,"galleta":2,"bocadillo":4,"cola":1,"mango":9,"guanabana":0,"maracuya":2,"hielo":3,"chocolate":5},
  {"fecha":"2026-03-16","coco":8,"pina":20,"tamarindo":2,"limon":4,"corozo":11,"galleta":3,"bocadillo":5,"cola":3,"mango":12,"guanabana":3,"maracuya":12,"hielo":4,"chocolate":3},
  {"fecha":"2026-03-17","coco":3,"pina":4,"tamarindo":1,"limon":5,"corozo":12,"galleta":2,"bocadillo":3,"cola":6,"mango":6,"guanabana":1,"maracuya":3,"hielo":5,"chocolate":2},
  {"fecha":"2026-03-18","coco":0,"pina":7,"tamarindo":2,"limon":2,"corozo":3,"galleta":1,"bocadillo":2,"cola":1,"mango":0,"guanabana":0,"maracuya":5,"hielo":19,"chocolate":1},
  {"fecha":"2026-03-19","coco":6,"pina":4,"tamarindo":1,"limon":3,"corozo":3,"galleta":4,"bocadillo":3,"cola":5,"mango":0,"guanabana":1,"maracuya":6,"hielo":4,"chocolate":3},
  {"fecha":"2026-03-20","coco":1,"pina":9,"tamarindo":1,"limon":2,"corozo":5,"galleta":5,"bocadillo":4,"cola":11,"mango":1,"guanabana":1,"maracuya":7,"hielo":6,"chocolate":1},
  {"fecha":"2026-03-21","coco":1,"pina":2,"tamarindo":1,"limon":6,"corozo":3,"galleta":1,"bocadillo":2,"cola":2,"mango":4,"guanabana":0,"maracuya":2,"hielo":3,"chocolate":9},
  {"fecha":"2026-03-22","coco":5,"pina":5,"tamarindo":1,"limon":5,"corozo":6,"galleta":3,"bocadillo":5,"cola":3,"mango":3,"guanabana":0,"maracuya":6,"hielo":3,"chocolate":5},
  {"fecha":"2026-03-23","coco":5,"pina":4,"tamarindo":0,"limon":2,"corozo":4,"galleta":2,"bocadillo":4,"cola":3,"mango":2,"guanabana":0,"maracuya":3,"hielo":0,"chocolate":2},
  {"fecha":"2026-03-24","coco":2,"pina":4,"tamarindo":1,"limon":1,"corozo":6,"galleta":0,"bocadillo":4,"cola":1,"mango":3,"guanabana":0,"maracuya":5,"hielo":4,"chocolate":1},
  {"fecha":"2026-03-25","coco":2,"pina":3,"tamarindo":1,"limon":8,"corozo":5,"galleta":1,"bocadillo":3,"cola":3,"mango":2,"guanabana":0,"maracuya":6,"hielo":6,"chocolate":0},
  {"fecha":"2026-03-26","coco":3,"pina":3,"tamarindo":2,"limon":3,"corozo":1,"galleta":1,"bocadillo":3,"cola":1,"mango":0,"guanabana":0,"maracuya":3,"hielo":5,"chocolate":1},
  {"fecha":"2026-03-27","coco":7,"pina":9,"tamarindo":0,"limon":3,"corozo":1,"galleta":4,"bocadillo":4,"cola":1,"mango":4,"guanabana":0,"maracuya":2,"hielo":1,"chocolate":3},
  {"fecha":"2026-03-28","coco":0,"pina":13,"tamarindo":0,"limon":2,"corozo":7,"galleta":2,"bocadillo":2,"cola":1,"mango":3,"guanabana":1,"maracuya":3,"hielo":4,"chocolate":0},
  {"fecha":"2026-03-29","coco":0,"pina":5,"tamarindo":0,"limon":0,"corozo":0,"galleta":0,"bocadillo":2,"cola":0,"mango":0,"guanabana":0,"maracuya":0,"hielo":0,"chocolate":0},
  {"fecha":"2026-03-30","coco":3,"pina":2,"tamarindo":0,"limon":0,"corozo":0,"galleta":0,"bocadillo":0,"cola":1,"mango":0,"guanabana":0,"maracuya":0,"hielo":0,"chocolate":0},
  {"fecha":"2026-03-31","coco":1,"pina":1,"tamarindo":0,"limon":0,"corozo":0,"galleta":0,"bocadillo":1,"cola":2,"mango":0,"guanabana":0,"maracuya":0,"hielo":0,"chocolate":0},
  {"fecha":"2026-04-06","coco":2,"pina":5,"tamarindo":3,"limon":4,"corozo":8,"galleta":0,"bocadillo":3,"cola":6,"mango":4,"guanabana":1,"maracuya":13,"hielo":9,"chocolate":3},
  {"fecha":"2026-04-07","coco":2,"pina":4,"tamarindo":3,"limon":4,"corozo":4,"galleta":0,"bocadillo":2,"cola":2,"mango":5,"guanabana":0,"maracuya":6,"hielo":1,"chocolate":3},
  {"fecha":"2026-04-08","coco":0,"pina":18,"tamarindo":0,"limon":2,"corozo":0,"galleta":0,"bocadillo":1,"cola":1,"mango":0,"guanabana":1,"maracuya":8,"hielo":6,"chocolate":1},
  {"fecha":"2026-04-09","coco":3,"pina":6,"tamarindo":2,"limon":5,"corozo":2,"galleta":0,"bocadillo":6,"cola":5,"mango":0,"guanabana":0,"maracuya":14,"hielo":7,"chocolate":1},
  {"fecha":"2026-04-10","coco":4,"pina":0,"tamarindo":3,"limon":3,"corozo":6,"galleta":3,"bocadillo":7,"cola":4,"mango":5,"guanabana":0,"maracuya":6,"hielo":4,"chocolate":6},
  {"fecha":"2026-04-11","coco":6,"pina":10,"tamarindo":0,"limon":6,"corozo":10,"galleta":0,"bocadillo":4,"cola":3,"mango":9,"guanabana":6,"maracuya":12,"hielo":2,"chocolate":0}
]'::json)
ON CONFLICT (fecha) DO NOTHING;
