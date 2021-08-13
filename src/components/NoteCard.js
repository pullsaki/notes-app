import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

export const NoteCard = ({ note, onDelete }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => onDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
