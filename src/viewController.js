const oracledb = require('oracledb');
import dbConfig from '../dbConfig';

export const getHome = (req, res) => {
  return res.render('home');
};

export const emp = async (req, res) => {
  oracledb.initOracleClient({ libDir: '/Applications/SQLDeveloper.app' });
  await oracledb.getConnection(
    {
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString,
    },
    (err, connect) => {
      if (err) {
        throw err;
      }
      console.log('Oracle DB 연결 성공');
    }
  );
};
