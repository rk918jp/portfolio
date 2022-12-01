import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DefaultLayout from "../../componets/layout/defaultlayout";
import { Button, Typography } from "@mui/material";
// import ButtonOrange from "../../componets/layout/button";
function Blog() {
  return (
    <DefaultLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Typography
              component="span"
              sx={{
                marginTop: 10,
                padding: "6px",
                backgroundColor: "#fedcac",
                display: "inline-block",
                borderRadius: "14px",
              }}
            >
              カテゴリ名
            </Typography>
            <Box textAlign="right">
              <Typography component="p">2022/12/25</Typography>
            </Box>
            <Paper sx={{ marginTop: 1, padding: 2 }}>タイトル</Paper>

            <Paper sx={{ marginTop: 6, padding: 2 }}>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Paper>
            <Box textAlign="center">
              {/* <Button
                sx={{ marginTop: 6, backgroundColor: "#fedcac" }}
                variant="contained"
              >
                一覧へ戻る
              </Button> */}
              {/* <ButtonOrange /> */}
            </Box>
          </Grid>
          <Grid item xs={1} sx={{ marginTop: 10 }}></Grid>
          <Grid item xs={2} sx={{ marginTop: 10 }}>
            {/* カテゴリグループ */}
            <Typography sx={{ borderBottom: 2, borderColor: "#fedcac" }}>
              カテゴリ
            </Typography>
            <Typography>Food(12)</Typography>
            <Typography>Travel(10)</Typography>
            <Typography>Game(10)</Typography>
            {/* タググループ */}

            <Typography
              sx={{ marginTop: 4, borderBottom: 2, borderColor: "#fedcac" }}
            >
              Tag
            </Typography>
            <Typography>Food(12)</Typography>
            <Typography>Travel(10)</Typography>
            <Typography>Game(10)</Typography>
          </Grid>
        </Grid>
      </Box>
    </DefaultLayout>
  );
}

export default Blog;
