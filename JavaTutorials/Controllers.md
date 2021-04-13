## This is some fake service
```
public interface FakeService {
  // create contact
   void createContact(FlatContactResponse contactRequest);
  // get Contact by Id
  
  // delete contact by id
  ResponseEntity<Void> deleteContactByContactId(Integer contactId); 
  // update contact
  void updateContactById(Integer contactId,contactRequest)
  }
  
 
```
## This is some fake service implementation
```
public class FakeServiceImpl implements FakeService {

  // we need to autowire all the other services here
  @Autowired
  
  // autowire the databases/repos
  @Autowired
  
  @Autowired private ObjectMapper objectMapper;


  public ResponseEntity<Void> deleteContactByContactId(final Integer contactId) {
    return contactRepo.deleteContactByContactId(contactId);
  }

}

```
## This is some fake controller
```
@RestController
@RequestMapping("/api")
public class fakeController implements fakeApi {

// calls FakeService class here
private FakeService fakeService;
private AnotherService anotherService;

@Autowired
public FakeController(final FakeService fakeService, final AnotherService anotherService) {
  this.fakeService = fakeService;
  this.anotherService = anotherService;
}

@GetMapping(
  value= "/account/contacts",
  produces = {"application/json"})
public List<Contact> getContacts(@RequestParam(Constants.CUSTOMER_NUMBER_PARAM) final Integer customerNumber){
  return fakeService.getContacts(customerNumber)}
}
```

## Fake controller tests
