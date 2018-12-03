import app from './index'
import config from './config';

app.listen(config.PORT, () => {
  console.log(`App is listening on port ${config.PORT}`);
})

export default app;