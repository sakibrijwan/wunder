require 'airborne'

describe 'Should Create a user, Validate the user creation, Delete the user ' do
  id=''
  it 'should create a user' do
    post 'http://dummy.restapiexample.com/api/v1/create',{ :name => 'Sakib',:salary => '1000',:age => '32' } #json api that returns { "id" : "" }
    id = json_body[:id] 
  end

  it 'should validate user has been created' do
    out=get 'http://dummy.restapiexample.com/api/v1/employee/'+id
    if(expect_status(200))
      puts 'User has been created'
    else
      puts 'Invalid user'
    end
  end

  it 'should delete the user' do   
    delete 'http://dummy.restapiexample.com/api/v1/delete/'+id
  end

end