import ListadoController from './ListadoController';
import { CircularProgress, List, ListItem, ListItemText,  Typography } from '@mui/material';
//Avatar,

//importar los estilos
import { listStyle, loadingStyle } from './ListadoStyles';
//, avatarStyle

const Listado = () => {
  const { loading, elements } = ListadoController();
  
  return (
    <div style={listStyle}>
      <Typography variant="h5" gutterBottom>
        Lista de elementos / usuarios
      </Typography>
      {loading ? (
        <div style={loadingStyle}>
          <CircularProgress />
        </div>
      ) : (
        <List>
          {elements.map((element) => (
            <ListItem key={element.id}>
              {/* <Avatar alt={element.name} src={element.avatar} style={avatarStyle}  /> */}
              <ListItemText primary={element.name} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Listado;
