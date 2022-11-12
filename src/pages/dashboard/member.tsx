import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import * as companyApi from "@/services/api/companies";

// style ----------------------------------------------
const cardStyle = {
  card: {
    margin: "40px",
  },
  cardInput: {
    textAlign: "center" as "center",
  },
  textField: {
    width: "50%",
    margin: "20px 0",
  },
};
// ---------------------------------------------------------

const AddMembers = () => {
  const initialMemberList: string[] = [];

  const [companyId, setCompanyId] = useState<string>("");

  const [companyName, setCompanyName] = useState<string>("");
  const [memberEmail, setMemberEmail] = useState<string>("");
  const [memberList, setMemberList] = useState(initialMemberList);

  const [companyLayer, setCompanyLayer] = useState<string>("block");
  const [memberLayer, setMemberLayer] = useState<string>("none");

  const [company, setCompany] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await companyApi.getAllCompanies();
      setCompany(data);
    };
    fetchData();
  }, []);

  const getMemberListByCompanyName = async (companyName: string) => {
    let i;
    for (i = 0; i < company.length; i++) {
      if (company[i].companyName === companyName) {
        setCompanyId(company[i]._id);
        console.log(companyId);
        return company[i].teamMember;
      }
    }
    if (i === company.length) {
      const company = {
        companyName: `${companyName}`,
        teamMember: [],
      };
      const newCompany = await companyApi.addCompany(company);
      setCompanyId(newCompany.data._id);
      return company.teamMember;
    }
  };

  const onAddNewMember = (newMember: string) => {
    setMemberList((prevState: any) => {
      return [...prevState, newMember];
    });
  };

  const onRemoveMember = (removed: string) => {
    setMemberList((prevState: any) => {
      for (let i = 0; i < prevState.length; i++) {
        if (prevState[i] === removed) {
          prevState.splice(i, 1);
        }
      }
      return [...prevState];
    });
  };

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }

  const memberListResult = memberList.map((member) => {
    return (
      <Grid item xs={6} key={member}>
        <Card sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Avatar {...stringAvatar(`${member.toUpperCase()}`)}></Avatar>
          <Typography sx={{ flex: 1, marginLeft: 2 }}>{member}</Typography>
          <IconButton aria-label="delete" onClick={() => onRemoveMember(member)}>
            <DeleteIcon />
          </IconButton>
        </Card>
      </Grid>
    );
  });

  const onCompanyInputChange = (event: any) => {
    const value = event.target.value;
    setCompanyName(value);
    console.log(value);
  };

  const onMemberInputChange = (event: any) => {
    const value = event.target.value;
    setMemberEmail(value);
    console.log(memberEmail);
  };

  const onNextButtonClick = async (event: any) => {
    event.preventDefault();
    try {
      const memberListData = await getMemberListByCompanyName(companyName);

      setMemberList(memberListData);
      setCompanyLayer("none");
      setMemberLayer("block");
    } catch (error) {
      console.error("Failed to match company due to error: ", error);
      // alert("No matched comapny exists");
    }
    console.log(event);
  };

  const onAddButtonClick = async (event: any) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (emailRegex.test(memberEmail)) {
      onAddNewMember(memberEmail);
      alert("A new member has joined your team")
    } else {
      alert("Invalid email format")
    }
    
    setMemberEmail("");
  };

  useEffect(() => {
    const company = {
      companyName: companyName,
      teamMember: memberList,
    };
    console.log(companyId, company)
    const upgrade = async ()=>{
      await companyApi.upgradeCompany(companyId, company);
    }
    upgrade();
  },[memberList]);

  return (
    <>
      <Container
        component="form"
        onSubmit={onNextButtonClick}
        maxWidth="md"
        sx={{ display: `${companyLayer}` }}
      >
        <Box sx={{ width: "100%" }} />
        <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
          Create Company
        </Typography>
        <Divider variant="middle" />
        <Card style={cardStyle.card} sx={{ minWidth: 275 }}>
          <CardContent>
            <CardMedia
              sx={{ textAlign: "center" }}
              component="img"
              image="./png/logo-no-background-h.png"
              alt="sortlog icon"
            />
            <Typography
              sx={{ fontSize: 20, textAlign: "center" }}
              color="text.secondary"
              gutterBottom
            >
              What is the name of your company?
            </Typography>
            <Box sx={cardStyle.cardInput}>
              <TextField
                style={cardStyle.textField}
                required
                label="Company Name"
                value={companyName}
                onChange={onCompanyInputChange}
              />
            </Box>
          </CardContent>
        </Card>
        <Divider variant="middle" />
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button type="submit" sx={{ margin: "20px" }}>
            NEXT
          </Button>
        </div>
      </Container>

      <Container maxWidth="md" sx={{ display: `${memberLayer}` }}>
        <Box sx={{ width: "100%" }} />
        <Card style={cardStyle.card} sx={{ minWidth: 275 }}>
          <CardContent component="form" onSubmit={onAddButtonClick}>
            <Typography sx={{ fontSize: 20, marginBottom: 5 }} color="text.secondary" gutterBottom>
              Team Member
            </Typography>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ marginBottom: 8 }}
            >
              {memberListResult}
            </Grid>

            <div style={{ display: "flex" }}>
              <TextField
                style={{ flex: 1 }}
                required
                label="Email of team members"
                value={memberEmail}
                onChange={onMemberInputChange}
              />
              <Button type="submit">+ Add</Button>
            </div>
          </CardContent>
        </Card>
        <Divider variant="middle" />
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button sx={{ margin: "20px" }}>SKIP</Button>
        </div>
      </Container>
    </>
  );
};

export default AddMembers;
