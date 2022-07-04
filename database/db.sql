-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla login.registrate
CREATE TABLE IF NOT EXISTS `registrate` (
  `Nombre` char(50) COLLATE armscii8_bin DEFAULT NULL,
  `Gmail` char(50) COLLATE armscii8_bin DEFAULT NULL,
  `Numero` char(50) COLLATE armscii8_bin DEFAULT NULL,
  `Contrasena` char(50) COLLATE armscii8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Volcando datos para la tabla login.registrate: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `registrate` DISABLE KEYS */;
INSERT INTO `registrate` (`Nombre`, `Gmail`, `Numero`, `Contrasena`) VALUES
	('Jonathan Ponce', 'jp.ponceanima@gmail.com', '973734539', 'wildones1'),
	('dasdas', 'asdas@gmail.com', '973734539', 'wildones1'),
	('Jondda', 'jonas@gmail.com', '973734539', 'wilsd'),
	('Jondda', 'jonas@gmail.com', '973734539', 'wilsd'),
	('yapo', 'hola@gmail.com', '973734539', 'sdkljas'),
	('cristian', 'cristian@gmail.com', '973734539', 'wildones1');
/*!40000 ALTER TABLE `registrate` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
