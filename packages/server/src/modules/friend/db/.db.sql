CREATE TABLE IF NOT EXISTS `user_friend` (
  `id` INT UNSIGNED AUTO_INCREMENT,
  `user_a_id` INT UNSIGNED,
  `user_b_id` INT UNSIGNED,
  `user_c_id` INT UNSIGNED,
  `send_user_id` INT UNSIGNED,
  `note` VARCHAR(500),
  `grou_id` INT UNSIGNED,
  `is_top` INT UNSIGNED,
  `is_bottom` INT UNSIGNED,
  `type` INT UNSIGNED,
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
