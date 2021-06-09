package kodlamaio.hrms.entities.concretes;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "job_advertisement_infos")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","jobAdvertisement"})
public class JobAdvertisementInfo {
	@Id
	@Column(name="job_advertisement_id")
	private int id;
	
	@Column(name="is_active")
	private boolean isActive;

	@Column(name="release_date")
	private Date releaseDate;

	@Column(name="deadline")
	private Date deadline;
	
	@OneToOne
    @MapsId
    @JoinColumn(name = "job_advertisement_id")
	private JobAdvertisement jobAdvertisement;
}
