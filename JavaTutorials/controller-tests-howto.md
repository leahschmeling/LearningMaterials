
```
@RunWith(MockitoJUnitRunner.class)
Public class MyControllerTest  {

@Mock private ServiceOne serviceone;
@Mock private ServiceTwo servicetwo;

@InjectMocks private MyController controller;
private MockMvc mockMvc;
private ObjectMapper mapper;

  @Before
  public void setup() {
    mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    mapper = new ObjectMapper();
    mapper.registerModule(new Jdk8Module());
    mapper.registerModule(new JavaTimeModule());
  }
  
@Test
public void test_myfunction() throws exception {
  mockMvc
    .perform(get("/api/country/1"))
    .andExpect(status().isOk())
    .andExpect(content().json("{\"value:\": {\"country\":\"USA\"}"))
    .andExpect(content().json("{\"value:\": {\"someId\":1}"));   
}

@Test
public void test_myfunctionWithBadUrl() throws exception {
mockMvc.perform(get("/api/country/x)).andExpect(status().is4xxClientError());
}
```

