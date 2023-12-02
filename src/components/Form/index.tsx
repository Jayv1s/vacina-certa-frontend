import styles from "./styles.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Input } from "../Input";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import MaskedInput from "react-input-mask";
import Button from "@mui/material/Button";

export const Form: React.FC = () => {
  const [password, setPassword] = useState("123458798574");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [nickname, setNickname] = useState({ value: "Jonny", error: "" });
  const [phone, setPhone] = useState({
    value: "+87 (39) 74973-4989",
    error: "",
  });
  const [name, setName] = useState({
    value: "John Lennon",
    error: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      gap="5rem"
      width="100%"
      marginTop={4}
      display="flex"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <div className={styles.user_info_container}>
          <div>
            <span>
              <strong>CPF: </strong>
            </span>
            <span>114.255.916-55</span>
            <br />
            <span>
              <strong>Data de nascimento: </strong>
            </span>
            <span>15/06/2000</span>
          </div>

          <Grid
            container
            rowSpacing={{ xs: 0, sm: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 8 }}
            columnSpacing={{ xs: 1, sm: 3, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <InputLabel htmlFor="outlined-adornment-password">
                Seu nome completo
              </InputLabel>
              <TextField
                fullWidth
                value={name.value}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) =>
                  setName((prev) => ({
                    ...prev,
                    value: e.target.value,
                  }))
                }
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <InputLabel htmlFor="outlined-adornment-password">
                Seu telefone
              </InputLabel>
              <MaskedInput
                mask="+99 (99) 99999-9999"
                value={phone.value}
                onChange={(e) =>
                  setPhone((prev) => ({
                    ...prev,
                    value: e.target.value,
                  }))
                }
              >
                <TextField id="outlined-basic" variant="outlined" fullWidth />
              </MaskedInput>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <InputLabel htmlFor="outlined-adornment-password">
                Sua senha
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <InputLabel htmlFor="outlined-adornment-password">
                Confirmar senha
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                type={confirmPassword ? "text" : "password"}
                value={confirmPassword}
                disabled
                placeholder="Confirmar senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={4} sm={8} md={8}>
              <InputLabel htmlFor="outlined-adornment-password">
                Como prefere ser chamado
              </InputLabel>
              <TextField
                fullWidth
                value={nickname.value}
                id="outlined-basic"
                placeholder="Preencha com o seu apelido"
                variant="outlined"
                onChange={(e) =>
                  setNickname((prev) => ({
                    ...prev,
                    value: e.target.value,
                  }))
                }
              />
            </Grid>
          </Grid>

          <Grid
            container
            columns={{ xs: 1, sm: 12, md: 12 }}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            className={styles.buttons_container}
          >
            <Grid item xs={1} sm={3} md={3}>
              <Button variant="contained" fullWidth>
                Salvar
              </Button>
            </Grid>
            <Grid item xs={1} sm={3} md={3}>
              <Button variant="outlined" color="error" fullWidth>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};
