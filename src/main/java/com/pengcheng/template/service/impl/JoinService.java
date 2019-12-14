package com.pengcheng.template.service.impl;

import com.pengcheng.template.dao.JoinMapper;
import com.pengcheng.template.domain.Join;
import com.pengcheng.template.service.IJoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JoinService implements IJoinService {

    @Autowired
    private JoinMapper joinMapper;

    @Override
    public Join byId(Long id) {
        return joinMapper.selectOneById(id);
    }

}
