import React, { useEffect, useState } from "react";
import scss from "./Currency.module.scss"
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import fetchCurrency from "../../utils/API/fetchCurrency/fetchCurrency";


function Currency() {
  const [currency, setCurrency] = useState([]);
 

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchCurrency();
        const sliced = data.slice(0, 3);
      
        setCurrency(sliced);
      } catch (error) {
        console.log(error);
      }
    };

    fetch(); 

  }, []);

  return (
 <div className="currency__page">
      <div className={scss.currency_sidebar}>
        <TableContainer className={scss.currency_table_container}>
          <Table className={scss.currency_table} size="small">
            <TableHead className={scss.currency_head}>
              <TableRow className={scss.currency_head_row}>
                <TableCell className={scss.currency_header}>Currency</TableCell>
                <TableCell align="center" className={scss.currency_header}>
                  Purchase
                </TableCell>
                <TableCell align="center" className={scss.currency_header}>
                  Sale
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={scss.currency_body}>
              {currency?.map((element) => (
                <TableRow key={element.ccy}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    className={scss.currency_name}
                  >
                    {element.ccy}
                  </TableCell>
                  <TableCell align="center" className={scss.currency_item}>
                    {Math.floor(element.buy * 100) / 100}
                  </TableCell>
                  <TableCell align="center" className={scss.currency_item}>
                    {Math.floor(element.sale * 100) / 100}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={scss.currency_bg}></div>
        </TableContainer>
      </div>
    </div>
    
  );
}

export default Currency;