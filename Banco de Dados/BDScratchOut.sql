-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 25-Set-2018 às 13:59
-- Versão do servidor: 5.7.17
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `java`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `influenciador`
--

CREATE TABLE `influenciador` (
  `id_influenciador` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nmInfluenciador` varchar(250) NOT NULL,
  `dtInfluenciador` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `influenciador`
--

INSERT INTO `influenciador` (`id_influenciador`, `id_usuario`, `nmInfluenciador`, `dtInfluenciador`) VALUES
(5, 1, 'Bom-humor', '17/09/2018'),
(6, 2, 'felicidade', '17/09/2018'),
(8, 3, 'triste', '17/09/2018');

-- --------------------------------------------------------

--
-- Estrutura da tabela `metodologia`
--

CREATE TABLE `metodologia` (
  `id_metodologia` int(11) NOT NULL,
  `nmMetodologia` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `metodologia`
--

INSERT INTO `metodologia` (`id_metodologia`, `nmMetodologia`) VALUES
(1, 'metodologia agil'),
(3, 'pomodoro'),
(4, 'scum');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tarefa`
--

CREATE TABLE `tarefa` (
  `id_tarefa` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_metodologia` int(11) DEFAULT NULL,
  `nmTarefa` varchar(200) NOT NULL,
  `descricao` varchar(280) NOT NULL,
  `dtPrazo` varchar(10) NOT NULL,
  `dtFinal` varchar(12) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tarefa`
--

INSERT INTO `tarefa` (`id_tarefa`, `id_usuario`, `id_metodologia`, `nmTarefa`, `descricao`, `dtPrazo`, `dtFinal`) VALUES
(3, 4, 3, 'mais uma	', 'dsada', '20/09/2018', 'null');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nmUsuario` varchar(250) NOT NULL,
  `dsEmail` varchar(180) NOT NULL,
  `dsSexo` varchar(12) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nmUsuario`, `dsEmail`, `dsSexo`) VALUES
(2, 'Andre', 'email@email', 'Feminino'),
(3, 'paloma', 'Email@email', 'Feminino'),
(4, 'Sara', 'Email@email', 'Feminino'),
(5, 'Jeferson', 'Email@email', 'Masculino');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `influenciador`
--
ALTER TABLE `influenciador`
  ADD PRIMARY KEY (`id_influenciador`);

--
-- Indexes for table `metodologia`
--
ALTER TABLE `metodologia`
  ADD PRIMARY KEY (`id_metodologia`);

--
-- Indexes for table `tarefa`
--
ALTER TABLE `tarefa`
  ADD PRIMARY KEY (`id_tarefa`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `influenciador`
--
ALTER TABLE `influenciador`
  MODIFY `id_influenciador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `metodologia`
--
ALTER TABLE `metodologia`
  MODIFY `id_metodologia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tarefa`
--
ALTER TABLE `tarefa`
  MODIFY `id_tarefa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
