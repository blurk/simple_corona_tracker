import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import classNames from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  const dataArr = [confirmed, recovered, deaths];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {dataArr.map(({ value, detail }, idx) => {
          let name = detail.split("/").slice(-1)[0];
          return (
            <Grid
              key={idx}
              item
              component={Card}
              xs={12}
              md={3}
              className={classNames(styles.card, styles[name])}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {name === "confirmed"
                    ? "Infected"
                    : name.charAt(0).toUpperCase() + name.slice(1)}
                </Typography>
                <Typography variant="h5" component="h2">
                  <CountUp start={0} end={value} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                  NUMBER OF{" "}
                  {name === "confirmed" ? "Infected" : name.toUpperCase()} CASES
                  OF COVID-19
                </Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
