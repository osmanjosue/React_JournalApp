// import { MailOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/journal';

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }
  
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quis
        tenetur assumenda adipisci, impedit aliquam voluptate fugiat. Deleniti
        suscipit eaque, labore doloremque quis laboriosam, distinctio excepturi
        nisi officia mollitia dolores.
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
      onClick={onClickNewNote}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', Opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      
    </JournalLayout>
  );
};
