CREATE TABLE IF NOT EXISTS `user` (
  `id` INT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(10) NOT NULL,
  `password` VARCHAR(20) NOT  NULL,
  `avatar` VARCHAR(500),
  `last_login_time` TIMESTAMP,
  `account` VARCHAR(255),
  PRIMARY KEY (`id`),
  UNIQUE (`account`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
