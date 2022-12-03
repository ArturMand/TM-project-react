import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyRate } from '../../redux/Currency/operation/CurrencyOperation';
import { selectorCurrencyRates } from '../../redux/Currency/selectors/CurrencySelectors';
// import scss from './Currency.module.scss';
// import {
//   Table,
//   TableBody,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableCell,
// } from '@mui/material';

function Currency() {
  const currencyRates = useSelector(selectorCurrencyRates);
  const chooseCurrencyRates = currencyRates.slice(0, 3);
  const dispatch = useDispatch();
  let timerId = useRef();
  // const intervalCurrencyRates = () => {
  //   dispatch(getCurrencyRate());
  //   if (currencyRates.length > 0) {
  //     timerId.current = setInterval(() => {
  //       dispatch(getCurrencyRate());
  //     }, 86400000);
  //   }
  // };

  useEffect(() => {
    if ((currencyRates.length === 0)) {
      dispatch(getCurrencyRate());
    }
    if (currencyRates.length > 0) {
      timerId.current = setInterval(() => {
        dispatch(getCurrencyRate());
      }, 86400000);
    }
    return () => {
      timerId.current = null;
    };
  }, [currencyRates, currencyRates.length, dispatch]);

  // 86400000
  return (
    //  <div className="currency__page">
    //       <div className={scss.currency_sidebar}>
    //         <TableContainer className={scss.currency_table_container}>
    //           <Table className={scss.currency_table} size="small">
    //             <TableHead className={scss.currency_head}>
    //               <TableRow className={scss.currency_head_row}>
    //                 <TableCell className={scss.currency_header}>Currency</TableCell>
    //                 <TableCell align="center" className={scss.currency_header}>
    //                   Purchase
    //                 </TableCell>
    //                 <TableCell align="center" className={scss.currency_header}>
    //                   Sale
    //                 </TableCell>
    //               </TableRow>
    //             </TableHead>
    //             <TableBody className={scss.currency_body}>
    //               {currency?.map((element) => (
    //                 <TableRow key={element.rateBuy
    //                 }>
    //                   <TableCell
    //                     component="th"
    //                     scope="row"
    //                     align="left"
    //                     className={scss.currency_name}
    //                   >
    //                     {element.rateBuy}
    //                   </TableCell>
    //                   <TableCell align="center" className={scss.currency_item}>
    //                     {Math.floor(element.buy * 100) / 100}
    //                   </TableCell>
    //                   <TableCell align="center" className={scss.currency_item}>
    //                     {Math.floor(element.sale * 100) / 100}
    //                   </TableCell>
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //           <div className={scss.currency_bg}></div>
    //         </TableContainer>
    //       </div>
    //     </div>

    //  <ul className={scss.list}>
    //  <li className={scss.item}>
    //      <span className={scss.title}>Currency</span>
    //      <span className={scss.currency}>USD</span>
    //      <span className={scss.currency}>EUR</span>
    //      <span className={scss.currency}>RUB</span>

    //  </li>
    //  {/* <li className={scss.item}>
    //      <span className={scss.title}>Purchase</span>
    //      <span className={scss.currency}>{USD}</span>
    //      <span className={scss.currency}>{EUR}</span>
    //      <span className={scss.currency}>{RUB}</span>
    //  </li>
    //  <li className={scss.item}>
    //      <span className={scss.title}>Sale</span>
    //      <span className={scss.currency}>{USD}</span>
    //      <span className={scss.currency}>{EUR}</span>
    //      <span className={s.currency}>{RUB}</span>
    //  </li> */}
    // </ul>

    <ul>
      <li>
        <ul>
          <li>Currency</li>
          <li>Purchase</li>
          <li>Sale</li>
        </ul>
      </li>

      <li>
        <ul>
          <li>USD</li>
          <li>EUR</li>
          <li>USD/EUR</li>
        </ul>
      </li>

      <li>
        <ul>
          {chooseCurrencyRates.map(({ rateBuy }) => (
            <li key={rateBuy}>{rateBuy}</li>
          ))}
        </ul>
      </li>

      <li>
        <ul>
          {chooseCurrencyRates.map(({ rateSell }) => (
            <li key={rateSell}>{rateSell}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

export default Currency;
