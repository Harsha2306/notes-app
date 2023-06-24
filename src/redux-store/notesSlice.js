import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notesSlice",
  initialState: {
    myList: [],
    isChanged: false,
  },
  reducers: {
    addNewNote(state, action) {
      state.myList.push(action.payload);
      state.isChanged = true;
    },
    deleteNote(state, action) {
      state.myList = state.myList.filter((note) => note.id !== action.payload);
      state.isChanged = true;
    },
    updateNote(state, action) {
      let note = state.myList.find((n) => n.id === action.payload.id);
      note.title = action.payload.title;
      note.notes = action.payload.notes;
      state.isChanged = true;
    },
    byTitleAsc(state) {
      state.myList = state.myList.sort((a, b) => {
        let ta = a.title.toLowerCase(),
          tb = b.title.toLowerCase();

        if (ta < tb) return -1;
        else if (ta > tb) return 1;
        return 0;
      });
      state.isChanged = false;
    },
    byTitleDsc(state) {
      state.myList = state.myList.sort((a, b) => {
        let ta = a.title.toLowerCase(),
          tb = b.title.toLowerCase();

        if (ta < tb) return 1;
        else if (ta > tb) return -1;
        return 0;
      });
      state.isChanged = false;
    },
    byDateAsc(state) {
      state.myList = state.myList.sort((a, b) => {
        let da = new Date(a.date),
          db = new Date(b.date);
        return da - db;
      });
      state.isChanged = false;
    },
    byDateDsc(state) {
      state.myList = state.myList.sort((a, b) => {
        let da = new Date(a.date),
          db = new Date(b.date);
        return db - da;
      });
      state.isChanged = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.myList = action.payload ? action.payload.myList : [];
    });
  },
});

export const sendNotesData = createAsyncThunk(
  "sendNewNotes",
  async (updatedList) => {
    try {
      const response = await fetch(
        "https://notes-app-c5804-default-rtdb.firebaseio.com/notes.json",
        {
          method: "PUT",
          body: JSON.stringify({ myList: updatedList }),
        }
      );
      if (!response.ok) throw new Error("An error occured");
      await response.json();
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const fetchNotes = createAsyncThunk("fetchNotes", async () => {
  try {
    const response = await fetch(
      "https://notes-app-c5804-default-rtdb.firebaseio.com/notes.json"
    );
    if (!response.ok) throw new Error("An error occured");
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
});

export const noteSliceActions = notesSlice.actions;

export default notesSlice;
