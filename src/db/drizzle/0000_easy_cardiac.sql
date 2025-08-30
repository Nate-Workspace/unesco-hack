-- 1. Drop the poll table
DROP TABLE IF EXISTS poll CASCADE;

-- 2. Remove the poll_id column from poll_vote
ALTER TABLE poll_vote
DROP COLUMN IF EXISTS poll_id;
