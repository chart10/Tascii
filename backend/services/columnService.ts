import Column from '../daos/models/column';

const getAllColumns = async () => {
  return Column.find({});
};
