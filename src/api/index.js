//dummy data for now just to build frontend

export async function getPosts() {
    try {
      const data  = [
          {
              "username" : "nrlopez",
              "profilePic" : "https://randomuser.me/api/portraits/lego/5.jpg",
              "text" : "this is all a test",
              "comments" : [
                {
                "username" : "treday",
                "profilePic" : "https://randomuser.me/api/portraits/lego/8.jpg",
                "text" : "I like tests!"
                },
                {
                "username" : "gomez",
                "profilePic" : "https://randomuser.me/api/portraits/lego/0.jpg",
                "text" : "What is this for?"
                }
              ]
          },
          {
              "username" : "nrlopez",
              "profilePic" : "https://randomuser.me/api/portraits/lego/5.jpg",
              "text" : "testing part 2",
              "comments" : [
                {
                    "username" : "treday",
                    "profilePic" : "https://randomuser.me/api/portraits/lego/8.jpg",
                    "text" : "Happy to be a part of this!"
                    }
              ]
          },
          {
              "username" : "gomez",
              "profilePic" : "https://randomuser.me/api/portraits/lego/0.jpg",
              "text" : "this is all meant to be replaced later",
              "comments" : [
                {
                    "username" : "treday",
                    "profilePic" : "https://randomuser.me/api/portraits/lego/8.jpg",
                    "text" : "Now I know why they codenamed us as Expendable!"
                    },
                {
                    "username" : "nrlopez",
                    "profilePic" : "https://randomuser.me/api/portraits/lego/5.jpg",
                    "text" : "Now you're getting it"
                    }
              ]
          }
      ]
      return data;
    } catch (error) {
      throw error;
    }
  }