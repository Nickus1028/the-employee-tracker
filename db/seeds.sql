USE employee_tracker

INSERT INTO departments (name)
VALUES
('Finance'),
('Human Resources'),
('Technology'),
('Support Services'),
('Bankers');

INSERT INTO roles (title, salary, department_id)
VALUES
('Accountant', 85000, 1),
('Senior Accountant', 110000, 1),
('Team Relations Specialist', 50000, 2),
('Full Stack Developer', 111000, 3),
('Front End Developer', 70000, 3),
('Back End Developer', 70000, 3),
('IT Support', 50000, 4),
('Facility Support', 40000, 4),
('Mortgage Banker', 60000, 5),
('Triple Crown Mortgage Banker', 200000, 5);

INSERT INTO employees (last_name, first_name, role_id, manager_id)
VALUES

('Wesker', 'Albert', 2, NULL),
('Redfield', 'Chris', 1, 1),
('Valentine', 'Jill', 1, 1),
('Burton', 'Barry', 1, 1),
('Marini', 'Enrico', 3, NULL),
('Chambers', 'Rebecca', 3, 5),
('Aiken', 'Richard', 3, 5),
('Speyer', 'Forest', 3, 5),
('Fenix', 'Marcus', 4, NULL),
('Santiago', 'Dominic', 4, 9),
('Baird', 'Damon', 5, 9),
('Cole', 'Augustus', 6, 9),
('Snake', 'Liquid', 7, NULL),
('Ocelot', 'Revolver', 7, 13),
('Wolf', 'Sniper', 8, 13),
('Mantis', 'Pyscho', 8, 13),
('Summers', 'Scott', 10, NULL),
('Grey', 'Jean', 9, 17),
('McCoy', 'Hank', 9, 17),
('Munroe', 'Ororo', 9, 17);


