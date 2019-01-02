<?php

declare(strict_types=1);
ini_set('display_errors', 'on');
error_reporting(E_ALL);

function getMonthAndYear()
{
	global $month, $year;
	
	$month = (int)date('m');
	$year  = (int)date('Y');
}

function clearInt($int)
{
	return abs((int)$int);
}

if (isset($_GET['ym'])) {
	$month = clearInt(substr($_GET['ym'], 4, 2));
	$year  = clearInt(substr($_GET['ym'], 0, 4));
	
	if ($_GET['ym'] === 'current') {
		getMonthAndYear();
	}
} else {
	getMonthAndYear();
}

$mkTime = mktime(0, 0, 0, $month, 1, $year);

// For Europe
#$skip = date('w', $mkTime) - 1;
#if ($skip < 0) {$skip = 6;}

// For USA
$skip = date('w', $mkTime);

$daysInMonth = date('t', $mkTime);
$day = 1;

$tableHead = '';
$tableBody = '';

for ($i = 0; $i <= 6; $i++) {
	$tableBody .= '<tr>';
	for ($j = 0; $j <= 6; $j++) {
		if (($skip > 0) || ($day > $daysInMonth)) {
			$tableBody .= '<td></td>';
			$skip--;
		} else {
			if ($day == date('d') && $month == date('m') && $year == date('Y')) {
				if ($j == 0 || $j == 6) {
					$tableBody .= '<td class="holiday">' . $day . '</td>';
				} else {
					$tableBody .= '<td class="today">' . $day . '</td>';
				}
			} else {
				$tableBody .= '<td class="day">' . $day . '</td>';
			}
			$day++;
		}
	}
	$tableBody .= '</tr>';
}

$tableHead = 
'<tr>
	<td colspan="2">
		<a href="' . $_SERVER['PHP_SELF'] . '?ym=' . date('Ym', mktime(0, 0, 0, $month - 1, 1, $year)) . '">&laquo;</a>
		<a href="' . $_SERVER['PHP_SELF'] . '?ym=current">' . "\u{2696}" . '</a>
		<a href="' . $_SERVER['PHP_SELF'] . '?ym=' . date('Ym', mktime(0, 0, 0, $month + 1, 1, $year)) . '">&raquo;</a>
	</td>
	<td colspan="2">' . date('Y', $mkTime) . '</td>
	<td colspan="3">' . date('F', $mkTime) . '</td>
</tr>
<tr>
	<th class="weekend">Su</th>
	<th>Mo</th>
	<th>Tu</th>
	<th>We</th>
	<th>Th</th>
	<th>Fr</th>
	<th class="weekend">Sa</th>
</tr>';

?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Calendar</title>
		<link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet">

		<style>
			:root {
				--color-white: #fff;
				--color-red: #d00;
				--color-blue: #369;
			}

			a { text-decoration: none; }
			table { text-align: center; }
			.today { background: var(--color-blue); color: var(--color-white); }
			.holiday { background: var(--color-red); color: var(--color-white); }
			.weekend { color: var(--color-red); }
			font-family: 'Cormorant Garamond', serif;
		</style>

		</head>
		<body>
			<table>
				<thead><?= $tableHead ?></thead>
				<tbody><?= $tableBody ?></tbody>
			</table>
		</body>
</html>


























