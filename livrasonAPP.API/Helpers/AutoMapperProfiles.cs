using System.Linq;
using AutoMapper;
using livrasonAPP.API.Models;
using livrasonAPP.API.Dtos;
using livrasonApp.API.Models;

namespace livrasonAPP.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
           CreateMap<User,UserForListDto>()
           .ForMember(dest=>dest.UserId,src=>src.MapFrom(src=>src.UserId));
            CreateMap<UserForListDto,Coli>();
            CreateMap<Coli,UserForListDto>();
            CreateMap<Reclamation,ReclamForListDto>();
            CreateMap<ColiForUpdateDto,Coli>();
         
         CreateMap<User, UserForDetailsDto>()
         .ForMember(dest=>dest.UserId,src=>src.MapFrom(src=>src.UserId));;
         CreateMap<UserForDetailsDto,User>()
          .ForMember(dest=>dest.UserId,src=>src.MapFrom(src=>src.UserId));
         CreateMap<UserForDetailsDto,UserForListDto>()
         .ForMember(dest=>dest.UserId,src=>src.MapFrom(src=>src.UserId));;
         CreateMap<Coli,ColiForRegisterDto>();
         CreateMap<Reclamation,ReclamForRegisterDto>();
         
         CreateMap<ReclamForRegisterDto,User>()
          .ForMember(dest=>dest.UserId,src=>src.MapFrom(src=>src.UserId));;
          CreateMap<User,ReclamForListDto>();
          CreateMap<Reclamation,ReclamForListDto>();
        CreateMap<Reclamation, UserForListDto>();
          CreateMap<User,UsersForAdminDto>();
           CreateMap<UserForUpdateDto,User>();
            CreateMap<ReclamForUpdateDto,Reclamation>();
           

          
        }
        
    }
}