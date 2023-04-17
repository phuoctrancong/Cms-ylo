import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import { Provider } from "react-redux";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import store from "./store";
import { ReactNotifications } from "react-notifications-component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import authRoutes from "./modules/auth/routes";
import publicRoutes from "./modules/public/routes";
import { privateRoutesFlatten } from "./routes";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import NotFoundPage from "./modules/public/feature/not-found";
import PublicLayout from "./layouts/Public";
import theme, { globalStyles } from "./themes";
import GlobalStyles from "@mui/material/GlobalStyles";
import { DateFns, getLocale } from "./utils/date-time";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles(theme)} />
        <StyledEngineProvider>
          <Suspense fallback={() => null}>
            <I18nextProvider i18n={i18n}>
              <Provider store={store}>
                <LocalizationProvider
                  dateAdapter={DateFns}
                  locale={getLocale()}
                ></LocalizationProvider>
                <ReactNotifications />
                <BrowserRouter>
                  <Routes>
                    {publicRoutes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        render={(props) => (
                          <PublicLayout>
                            <route.component {...props} />
                          </PublicLayout>
                        )}
                      />
                    ))}
                    {authRoutes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                      />
                    ))}
                    {privateRoutesFlatten.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                      />
                    ))}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </BrowserRouter>
              </Provider>
            </I18nextProvider>
          </Suspense>
        </StyledEngineProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
