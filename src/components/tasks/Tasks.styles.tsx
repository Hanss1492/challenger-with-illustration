// Tasks.styles.tsx

import { createStyles, makeStyles, Theme } from '@mui/material/styles';

export const useTaskStyles = () =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        maxWidth: 400,
        margin: 'auto',
        padding: theme.spacing(2),
        border: '1px solid #ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
      },
      taskList: {
        listStyle: 'none',
        padding: 0,
        marginTop: theme.spacing(2),
        marginLeft: 0,
      },
      taskItem: {
        marginBottom: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
      },
      taskDescription: {
        marginRight: theme.spacing(1),
      },
      input: {
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1),
        borderRadius: 4,
        border: '1px solid #ccc',
      },
      addButton: {
        marginLeft: theme.spacing(1),
      },
    })
  );

export default useTaskStyles;
