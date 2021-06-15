package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.WorkTimeStyleService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.dataAccess.abstracts.WorkTimeStyleDao;
import kodlamaio.hrms.entities.concretes.WorkTimeStyle;

@Service
public class WorkTimeStyleManager implements WorkTimeStyleService{
	private WorkTimeStyleDao workTimeStyleDao;
	
	@Autowired
	public WorkTimeStyleManager(WorkTimeStyleDao workTimeStyleDao) {
		super();
		this.workTimeStyleDao = workTimeStyleDao;
	}

	@Override
	public DataResult<List<WorkTimeStyle>> getAll() {
		return new SuccessDataResult<List<WorkTimeStyle>>
		(this.workTimeStyleDao.findAll(), "İş zamanı türleri listelendi");
	}

	@Override
	public Result add(WorkTimeStyle entity) {
		// TODO Auto-generated method stub
		return null;
	}

}
