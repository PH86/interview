import React from "react";
import "./App.css";
import * as themeConf from './themes/theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AppContext } from "./context";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { JobVacancies } from "./pages/JobVacancies/JobVacancies";
import { CandidateSearch } from "./pages/CandidateSearch/CandidateSearch";
import { ReportingStudio } from "./pages/ReportingStudio/ReportingStudio";
import { UserSettings } from "./pages/UserSettings/UserSettings";
import { Account } from "./pages/Account/Account";
import { SignIn } from "./pages/SignIn/SignIn";
import { SingleJob } from "./pages/SingleJob/SingleJob";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from './themes/themeManager';
import { ModalProvider } from "styled-react-modal";

const App: React.FC<{}> = (): React.ReactElement => {
	const theme = useTheme();
	const [loggedIn, setLoggedIn] = React.useState(false);
	const [openModal, setOpenModal] = React.useState(false);
	const [showVacancy, setShowVacancy] = React.useState(false);
	const [jobForm, setJobForm] = React.useState({
		jobTitle: '',
		companyName: '',
		location: '',
		companyDescription: '',
		salaryMin: '',
		salaryMax: '',
		endDate: '',
		jobDescription: '',
		essentialRequirments: [] as string[],
		desiredRequirments: [] as string[],
		responsibilities: [] as string[]
	});

	const Wrapper = styled.div`
    background-color: ${themeConf.backgroundColor};
    color: ${themeConf.textColor};
  `;

	return (
		<ThemeProvider theme={{ mode: theme.mode }}>
			<AppContext.Provider value={{ loggedIn, setLoggedIn, openModal, setOpenModal, showVacancy, setShowVacancy, jobForm, setJobForm }}>
				<ModalProvider>
					{!loggedIn ? (
						<SignIn />
					) : (
						<Router>
							<Sidebar />
							<Wrapper>
								<Switch>
									<Redirect exact from="/interview" to="/interview/dashboard" />
									<Route path="/interview/dashboard" exact component={Dashboard} />
									<Route path="/interview/jobs" exact component={JobVacancies} />
									<Route
										path="/interview/candidates"
										exact
										component={CandidateSearch}
									/>
									<Route
										path="/interview/studio"
										exact
										component={ReportingStudio}
									/>
									<Route
										path="/interview/settings"
										exact
										component={UserSettings}
									/>
									<Route path="/interview/account" exact component={Account} />
									<Route path="/interview/jobs/:id">
										<SingleJob />
									</Route>
								</Switch>
							</Wrapper>
						</Router>
					)}
				</ModalProvider>
			</AppContext.Provider>
		</ThemeProvider>
	);
}

export default App;
