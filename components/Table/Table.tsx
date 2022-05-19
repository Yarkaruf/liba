import styles from './Table.module.css';
import { TableProps } from './Table.props';
import React, { useState } from 'react';


export const Table = ({ data, ...props }: TableProps): JSX.Element => {
	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.thead}>
					<td>Автор</td>
					<td>Название</td>
					<td>Жанр</td>
					<td>Жанр2</td>
					<td>Описание</td>
					<td>Цена</td>
					<td>Дата</td>
					<td>Состояние</td>
					<td>Возраст</td>
				</tr>
			</thead>
			<tbody>
				{data.map((row: any) => {
					return (
						<tr key={row.Name} className={styles.tbody}>
							<td className={styles.item}>{row.Avtor}</td>
							<td className={styles.item}>{row.Name}</td>
							<td className={styles.item}>{row.Shanr}</td>
							<td className={styles.item}>{row.Column5}</td>
							<td className={styles.item}>{row.Opisanie}</td>
							<td className={styles.item}>{row.Coust}</td>
							<td className={styles.item}>{row.Date}</td>
							<td className={styles.item}>{row.State}</td>
							<td className={styles.item}>{row.Age}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	);
};