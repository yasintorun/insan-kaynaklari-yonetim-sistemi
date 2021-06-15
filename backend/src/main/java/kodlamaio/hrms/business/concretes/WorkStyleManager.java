package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.WorkStyleService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.dataAccess.abstracts.WorkStyleDao;
import kodlamaio.hrms.entities.concretes.WorkStyle;

@Service
public class WorkStyleManager implements WorkStyleService{

	private WorkStyleDao workStyleDao;
	
	
	public WorkStyleManager(WorkStyleDao workStyleDao) {
		super();
		this.workStyleDao = workStyleDao;
	}

	@Override
	public DataResult<List<WorkStyle>> getAll() {
		return new SuccessDataResult<List<WorkStyle>>
		(this.workStyleDao.findAll(), "iş türleri listelendi!");
	}

	@Override
	public Result add(WorkStyle entity) {
		// TODO Auto-generated method stub
		return null;
	}

}
