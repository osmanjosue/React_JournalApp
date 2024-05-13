// import { MailOutline } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quis
        tenetur assumenda adipisci, impedit aliquam voluptate fugiat. Deleniti
        suscipit eaque, labore doloremque quis laboriosam, distinctio excepturi
        nisi officia mollitia dolores.
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView/>
    </JournalLayout>
  );
};
