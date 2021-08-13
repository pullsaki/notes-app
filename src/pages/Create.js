import {
  Button,
  Container,
  Typography,
  Radio,
  RadioGroup,
  TextField,
  makeStyles,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import React, { useState } from "react";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!title) {
      setTitleError(true);
    }

    if (!details) {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);

      setTitleError(false);
      setDetailsError(false);
      setTitle("");
      setDetails("");
    }
  };

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={submitHandler}>
        <TextField
          onChange={(event) => setTitle(event.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          value={title}
          error={titleError}
        />
        <TextField
          onChange={(event) => setDetails(event.target.value)}
          className={classes.field}
          label="Details"
          multiline
          rows={4}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          value={details}
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel
              value="todos"
              control={<Radio />}
              label="To-dos"
            />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
