\echo 'Delete and recreate dragon db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS dragon;
CREATE DATABASE dragon;
\connect dragon

\i dragon-schema.sql
-- \i dragon-seed.sql