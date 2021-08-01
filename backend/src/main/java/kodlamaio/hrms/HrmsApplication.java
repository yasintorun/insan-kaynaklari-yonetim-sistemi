package kodlamaio.hrms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import kodlamaio.hrms.core.utilities.helpers.Encryption;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class HrmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(HrmsApplication.class, args);
	}

	
	@Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                                  
          .apis(RequestHandlerSelectors.basePackage("kodlamaio.hrms"))                      
          .build();                                           
    }
	
}

/*
 * 
 * 
 *
spring.datasource.url=jdbc:postgresql://ec2-34-193-101-0.compute-1.amazonaws.com:5432/ddauehf9qlidju
spring.datasource.username=dkbkhpkexbkgwu
spring.datasource.password=7e03555790250cfa9d254f23214cb8676753300488e3e07e0ae944acb4031b44
 * 
 * 
 * 
 * */
