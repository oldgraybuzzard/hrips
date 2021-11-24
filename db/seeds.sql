INSERT INTO department (name)
VALUES
('Operations'),
('Production'),
('Business Development'),
('IT'),
('Engineering Support');

INSERT INTO role (title, salary, department_id)
VALUES
('President', 100000, 1),
('GM', 80000, 1),
('Technical Writer 1', 45000, 5),
('Document Conversion Specialist', 24000, 2);

INSERT INTO employee (first_name, last_name, email, manager_id, role_id)
VALUES
('James', 'Fraser', 'jf@goldenbough.edu', NULL, 1),
  ('Jack', 'London', 'jlondon@ualaska.edu', 1, 2),
  ('Robert', 'Bruce', 'rbruce@scotland.net', 2, 3),
  ('Peter', 'Greenaway', 'pgreenaway@postmodern.com', 1, 3),
  ('Derek', 'Jarman', 'djarman@prospectcottage.net', 2, 4),
  ('Paolo', 'Pasolini', 'ppasolini@salo.com', 2, 4);

