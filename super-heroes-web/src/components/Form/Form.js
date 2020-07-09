import React from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { useStyles } from "./styles";
import { useAddHero } from "./hooks/useAddHero";

export const Form = () => {
  const classes = useStyles();
  const {
    nickname,
    setNickname,
    realName,
    setRealName,
    description,
    setDescription,
    superPowers,
    setSuperPowers,
    phrase,
    setPhrase,
    handleRequest,
    errorFormat,
    setErrorFormat,
    isLoading,
  } = useAddHero();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Paper elevation={3} className={classes.root}>
        <form className={classes.form}>
          <TextField
            className={classes.input}
            error={false}
            id="nickname-input"
            label="nickname"
            type="text"
            variant="outlined"
            value={nickname}
            name="nickname"
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <TextField
            className={classes.input}
            id="realname-input"
            label="real name"
            type="text"
            variant="outlined"
            value={realName}
            name="realName"
            onChange={(e) => setRealName(e.target.value)}
          />
          <TextField
            className={classes.input}
            id="description-input"
            label="description"
            type="text"
            variant="outlined"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            multiline
          />
          <TextField
            className={classes.input}
            id="superPowers-input"
            label="super powers"
            type="text"
            variant="outlined"
            value={superPowers}
            name="superPowers"
            onChange={(e) => setSuperPowers(e.target.value)}
            multiline
          />
          <TextField
            className={classes.input}
            id="phrase-input"
            label="catch phrase"
            type="text"
            variant="outlined"
            value={phrase}
            name="phrase"
            onChange={(e) => setPhrase(e.target.value)}
          />
          <div className={classes.fileInput}>
            <label className="file-label" htmlFor="inputUploadImage">
              Choose and upload image
            </label>
            <input type="file" id="inputUploadImage" />
          </div>
        </form>
        <div className={classes.submitButton}>
          {errorFormat ? (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setErrorFormat(false)}
            >
              Upload only .jpg and .png files
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleRequest}
              disabled={!(nickname.length > 0) || isLoading}
            >
              {isLoading ? "Loading..." : "Add New Hero"}
            </Button>
          )}
        </div>
      </Paper>
    </Grid>
  );
};
