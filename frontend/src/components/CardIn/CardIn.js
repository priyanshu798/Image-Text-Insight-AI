import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CardIn({ title, src, dis, active }) {
  return (
    <Card
      sx={{
        backgroundColor: active ? "#c4d5f2" : "none",
        maxWidth: 300,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          xs={{
            paddingTop: "56.25%",
          }}
          component="img"
          height="140"
          image={src}
          alt="green iguana"
        />
        <CardContent
          xs={{
            textAlign: "left",
            padding: 4 * 3,
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            xs={{
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            xs={{
              lineHeight: 1.8,
            }}
          >
            {dis}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardIn;
