import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import mainTheme from "./mailForm.module.css";
import light from "./lightTheme.module.css";
import dark from "./darkTheme.module.css";
import { useTheme } from "@/src/context/ThemeContext";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const MailForm = () => {
  const form = useRef<any>();
  const [open, setOpen] = React.useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const currentTheme = useTheme();
  const styles = { light, dark };

  useEffect(() => {
    setTheme(currentTheme.theme.theme);
  }, [currentTheme]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "template_xtdwudo",
        form.current!,
        "UWev9pioSQ_9-2VYo"
      )
      .then(
        (result) => {
          setShowLoader(true);
          handleClickOpen();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className={`${styles[theme].form_container} ${mainTheme.form_container}`}
    >
      <form
        className={`${styles[theme].form} ${mainTheme.form}`}
        ref={form}
        onSubmit={sendEmail}
      >
        <h1>Entre em contato!</h1>
        <TextField required type="text" label="Nome" name="user_name" />
        <TextField required type="text" label="E-mail" name="user_email" />
        <TextField
          required
          placeholder="Mensagem"
          multiline
          name="message"
          rows={4}
        />
        <div className={mainTheme.form_button}>
          <button
            className={`${styles[theme].submit_button} ${mainTheme.submit_button}`}
            type="submit"
            id="input-submit"
          >
            {/* {showLoader && <p>Loading...</p>} */}
            Enviar
          </button>
        </div>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Mensagem enviada com sucesso!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Iremos entrar em contato com você em breve.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MailForm;
