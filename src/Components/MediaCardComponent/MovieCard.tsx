import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./MovieCard.css";

interface IMediaCardProps {
  [propName: string]: any;
}

function MediaCard(props: IMediaCardProps) {
  return (
    <div>
      <Card className="MediaCardContainer">
        <CardActionArea>
          <CardMedia className="MediaCardImage" image={props.ImageUrl} />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="MediaCardDescription"
            >
              {props.title}
              <br></br>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default MediaCard;
